const fs = require('fs');
const path = require('path');
const TurndownService = require('/tmp/turndown-env/node_modules/turndown');
const turndownPluginGfm = require('/tmp/turndown-env/node_modules/turndown-plugin-gfm');

const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced'
});
turndownService.use(turndownPluginGfm.gfm);
// Keep audio and script elements entirely intact instead of stripping them
turndownService.keep(['audio', 'source', 'script', 'noscript']);

// Custom rule to aggressively force headerless HTML layout blocks into Markdown Tables natively 
turndownService.addRule('forceMarkdownTable', {
    filter: 'table',
    replacement: function (content, node) {
        let out = '\n\n';
        for (let i = 0; i < node.rows.length; i++) {
            let row = node.rows[i];
            let rowText = '|';
            for (let j = 0; j < row.cells.length; j++) {
                let cellMd = turndownService.turndown(row.cells[j].innerHTML);
                // Compress multiline layouts into valid single-line Markdown table cells
                cellMd = cellMd.replace(/\n\s*\n/g, '<br><br>').replace(/\n/g, '<br>').replace(/\|/g, '\\|');
                rowText += ' ' + cellMd + ' |';
            }
            out += rowText + '\n';
            if (i === 0) {
                let divider = '|';
                for (let j = 0; j < row.cells.length; j++) {
                    divider += '---|';
                }
                out += divider + '\n';
            }
        }
        return out + '\n\n';
    }
});

// Tunnel legacy <a name=""> anchors through the markdown compiler securely
turndownService.addRule('preserveAnchor', {
    filter: function (node) {
        return node.nodeName === 'A' && node.getAttribute('name');
    },
    replacement: function (content, node) {
        return '[[[ANCHOR_' + node.getAttribute('name') + ']]]' + content;
    }
});

// Force all <pre> blocks into fenced code-blocks since Turndown natively skips them if nested inside legacy <ul> lists without <li> wrappers
turndownService.addRule('forcePre', {
    filter: 'pre',
    replacement: function (content, node) {
        return '\n\n```text\n' + node.textContent.trim() + '\n```\n\n';
    }
});

const targetFolders = process.argv.slice(2);
if (targetFolders.length === 0) {
    console.error("Please provide a folder path to convert.");
    process.exit(1);
}

const SRC_DIR = path.join(__dirname, 'src');
const SOFTSYNTH_ROOT = '/Users/phil/Work/www/softsynth';

function ensureDirSync(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

function extractPhp(content) {
    let title = "";
    const titleMatch = content.match(/\$pageTitle\s*=\s*(["'])(.*?)\1;/i);
    if (titleMatch) title = titleMatch[2];

    const headerPattern = /include(?:_once)?\(\s*["']header\.php["']\s*\);?\s*\?>\s*/is;
    const footerPattern = /<\?php\s+include(?:_once)?\(\s*["']footer\.php["']\s*\);?\s*(?:\?>)?/is;

    let body = content;
    const headerSplit = content.split(headerPattern);
    if (headerSplit.length > 1) {
        body = headerSplit[1];
    }

    const footerSplit = body.split(footerPattern);
    if (footerSplit.length > 1) {
        body = footerSplit[0];
    }

    return { title, body: body.trim() };
}

function extractHtml(content) {
    let title = "";
    const titleMatch = content.match(/<title>(.*?)<\/title>/i);
    if (titleMatch) title = titleMatch[1];

    const headerPattern = /<!--#include\s+virtual=["']\/header\.html["']\s*-->/i;
    const footerPattern = /<!--#include\s+virtual=["']\/footer\.html["']\s*-->/i;

    if (!headerPattern.test(content) && !footerPattern.test(content)) {
        return null; // Autodoc or Verbatim
    }

    let body = content;
    const headerSplit = body.split(headerPattern);
    if (headerSplit.length > 1) body = headerSplit[1];

    const footerSplit = body.split(footerPattern);
    if (footerSplit.length > 1) body = footerSplit[0];

    // Strip out <body> tags if they accidentally got swept in
    body = body.replace(/<\/?body[^>]*>/ig, '');
    body = body.replace(/<\/?html[^>]*>/ig, '');
    
    return { title: title.trim(), body: body.trim() };
}

function getNavDataForFile(filePath) {
    const oldWebPath = '/' + path.relative(SOFTSYNTH_ROOT, filePath).replace(/\\/g, '/');
    
    let currentDir = path.dirname(filePath);
    let myKey = null;
    let myOrder = null;
    let myParent = null;
    
    // Explicit exclusions that don't need navigation maps
    if (path.basename(filePath).toLowerCase() === 'header.php' || path.basename(filePath).toLowerCase() === 'footer.php') return null;

    while (currentDir.startsWith(SOFTSYNTH_ROOT)) {
        const headerPath = path.join(currentDir, 'header.php');
        if (fs.existsSync(headerPath)) {
            const navMatch = fs.readFileSync(headerPath, 'utf8').match(/printNavigationBar\s*\(\s*array\s*\((.*?)\)\s*\)/is);
            if (navMatch) {
                const items = navMatch[1].split(',');
                let orderCount = 1;
                
                const currentFolderIndexUrl = '/' + path.relative(SOFTSYNTH_ROOT, currentDir).replace(/\\/g, '/') + '/index.php';
                const currentFolderRootUrl = '/' + path.relative(SOFTSYNTH_ROOT, currentDir).replace(/\\/g, '/') + '/';
                let groupParentName = null;
                const parsedItems = [];
                
                for (let item of items) {
                    const parts = item.split('=>');
                    if (parts.length === 2) {
                        const url = parts[0].replace(/['"\s]/g, '');
                        let title = parts[1].replace(/['"\s]/g, '');
                        title = title.replace(/\/\/.*$/, '').trim();
                        parsedItems.push({url, title, order: orderCount++});
                        
                        if (url === currentFolderIndexUrl || url === currentFolderRootUrl) {
                            groupParentName = title;
                        }
                    }
                }
                
                for (let item of parsedItems) {
                    // Normalize the URL check
                    if (item.url === oldWebPath || item.url === oldWebPath.replace('/index.php', '/')) {
                        if (!myKey) {
                            myKey = item.title;
                            myOrder = item.order;
                        }
                        if (item.url !== currentFolderIndexUrl && item.url !== currentFolderRootUrl) {
                            // This file maps as a child in this array
                            if (groupParentName) {
                                myParent = groupParentName;
                                return { title: myKey, order: myOrder, parent: myParent };
                            }
                        }
                        // If it matched the current folder index, it is the parent itself, so let loop continue upward!
                    } else if (myKey) {
                        // We are crawling upward. If the current header defines a group parent, that is our actual parent!
                        if (groupParentName && myKey !== groupParentName) {
                            return { title: myKey, order: myOrder, parent: groupParentName };
                        }
                    }
                }
            }
        }
        const parentDir = path.resolve(currentDir, '..');
        if (parentDir === currentDir) break;
        currentDir = parentDir;
    }
    
    if (myKey) return { title: myKey, order: myOrder, parent: myParent };
    return null;
}

function processFile(filePath) {
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
        const basename = path.basename(filePath);
        if (['aardvark', 'aardvark_custom', 'admin', '.git', 'Templates', '_notes'].includes(basename)) return;
        fs.readdirSync(filePath).forEach(f => processFile(path.join(filePath, f)));
        return;
    }

    const basename = path.basename(filePath).toLowerCase();
    if (['header.php', 'footer.php', 'header.html', 'footer.html'].includes(basename)) {
        return; // Ignore these files entirely
    }

    const ext = path.extname(filePath).toLowerCase();
    const basenameNoExt = path.basename(filePath, ext);
    const destRelPath = path.relative(SOFTSYNTH_ROOT, filePath);
    const destPath = path.join(SRC_DIR, destRelPath);

    if (ext === '.html' || ext === '.htm') {
        const phpPath = path.join(path.dirname(filePath), basenameNoExt + '.php');
        if (fs.existsSync(phpPath)) {
            console.log(`SKIPPED HTML (PHP supersedes): ${destRelPath}`);
            return; // Skip this legacy HTML file to prevent Eleventy permalink conflicts
        }
    }

    const validExtensions = ['.php', '.html', '.htm', '.zip', '.lha', '.mid', '.pdf', '.png', '.jpg', '.jpeg', '.gif', '.txt', '.jar', '.mp3', '.wav', '.ogg', '.css', '.js', '.wasm', '.map', '.json', '.woff', '.woff2', '.ttf', '.svg', '.ico'];
    if (!validExtensions.includes(ext)) {
        // Handle extensionless files like Javadoc 'package-list'
        if (basename.toLowerCase() !== 'package-list') {
            return;
        }
    }

    ensureDirSync(path.dirname(destPath));

    if (['.zip', '.lha', '.mid', '.pdf', '.png', '.jpg', '.jpeg', '.gif', '.txt', '.jar', '.mp3', '.wav', '.ogg', '.css', '.js', '.wasm', '.map', '.json', '.woff', '.woff2', '.ttf', '.svg', '.ico'].includes(ext) || basename.toLowerCase() === 'package-list') {
        fs.copyFileSync(filePath, destPath);
        console.log(`COPIED  : ${destRelPath}`);
        return;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const navData = getNavDataForFile(filePath);
    
    let eleventyNavString = '';
    if (navData) {
        eleventyNavString = `eleventyNavigation:\n  key: "${navData.title.replace(/"/g, '\\"')}"\n  order: ${navData.order}\n`;
        if (navData.parent) {
            eleventyNavString += `  parent: "${navData.parent.replace(/"/g, '\\"')}"\n`;
        }
    }

    if (ext === '.php' || ext === '.html' || ext === '.htm') {
        const parsed = (ext === '.php') ? extractPhp(content) : extractHtml(content);
        if (parsed === null && ext !== '.php') {
            fs.copyFileSync(filePath, destPath);
            console.log(`VERBATIM HTML : ${destRelPath}`);
            return;
        }

        let outPath = destPath.replace(/\.(php|html?)$/, '.md');
        let markdownBody = turndownService.turndown(parsed.body);
        
        // 1. Strip absolute domains from internal links
        markdownBody = markdownBody.replace(/https?:\/\/(?:www\.)?softsynth\.com\/?/gi, '/');
        // Fix any accidental double slashes
        markdownBody = markdownBody.replace(/\]\(\/+/g, '](/');

        // 2. Sophisticated URL Parser: Translate legacy paths, .php endpoints, and encode illegal spaces
        markdownBody = markdownBody.replace(/\]\(([^)]+)\)/g, (match, linkUrl) => {
            let titleStr = '';
            let rawUrl = linkUrl;
            // Extract Markdown Title ("Title") if Turndown added one
            let titleMatch = linkUrl.match(/^(.*?)\s+("[^"]*"|'[^']*')$/);
            if (titleMatch) {
                rawUrl = titleMatch[1];
                titleStr = ' ' + titleMatch[2];
            }
            
            // URI encode any literal spaces in the URL string, which natively breaks CommonMark!
            rawUrl = rawUrl.replace(/ /g, '%20');
            
            let urlParts = rawUrl.match(/^([^?#]*)([?#].*)?$/);
            if (!urlParts) return '](' + rawUrl + titleStr + ')';
            
            let urlPath = urlParts[1] || '';
            let suffix = urlParts[2] || '';

            if (urlPath.toLowerCase().startsWith('http') || urlPath.toLowerCase().startsWith('mailto')) {
                return '](' + rawUrl + titleStr + ')'; 
            }

            let isLegacyFile = false;
            let extMatch = urlPath.match(/\.(php|html|htm)$/i);
            if (extMatch) {
                isLegacyFile = true;
                urlPath = urlPath.slice(0, -extMatch[0].length);
            }

            if (urlPath === '' && suffix.startsWith('#')) {
                return '](' + suffix + titleStr + ')';
            }
            if (urlPath === '') urlPath = '/';

            // Resolve ALL relative links (even images/zips!) to proper Absolute Paths so Eleventy subfolders never break them
            if (!urlPath.startsWith('/')) {
                const webDir = '/' + path.relative(SOFTSYNTH_ROOT, path.dirname(filePath)).replace(/\\/g, '/');
                urlPath = path.posix.join(webDir, urlPath);
            }

            if (isLegacyFile) {
                if (urlPath.endsWith('/index')) {
                    urlPath = urlPath.substring(0, urlPath.length - 5);
                } else if (!urlPath.endsWith('/')) {
                    urlPath = urlPath + '/';
                }
            }

            return '](' + urlPath + suffix + titleStr + ')';
        });

        // 3. Globally escape all raw HTML tags that Turndown dumped into the Markdown so they display safely as text.
        // EXCEPT: We use a negative lookahead to ignore <audio>, <source>, <script>, <noscript>, and <br> components so they render natively.
        markdownBody = markdownBody.replace(/<(?!\/?audio\b|\/?source\b|\/?script\b|\/?noscript\b|\/?br\b)([^>]+)>/gi, '&lt;$1&gt;');

        // 4. Safely restore the legacy HTML anchor tokens back into real DOM elements so in-page links function properly
        markdownBody = markdownBody.replace(/\[\[\[ANCHOR_([^\]]+)\]\]\]/g, '<a name="$1"></a>');

        const fm = `---\nlayout: base.njk\n${parsed.title ? `title: "${parsed.title.replace(/"/g, '\\"')}"\n` : ''}${eleventyNavString}---\n\n`;
        fs.writeFileSync(outPath, fm + markdownBody);
        console.log(`CONVERTED ${ext.toUpperCase()} : ${destRelPath}`);
    }
}

targetFolders.forEach(folder => {
    let fullPath = path.resolve(folder);
    if (fs.existsSync(fullPath)) {
        processFile(fullPath);
    } else {
        console.error(`Directory not found: ${fullPath}`);
    }
});
