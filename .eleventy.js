const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Configure markdown-it to safely open external links in a new tab
  let mdOptions = {
    html: true,
    breaks: false,
    linkify: true
  };
  let md = markdownIt(mdOptions);
  
  // Custom rule for external links
  let defaultRender = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };
  
  md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    let aIndex = tokens[idx].attrIndex('href');
    if (aIndex >= 0) {
      let href = tokens[idx].attrs[aIndex][1];
      if (/^https?:\/\//i.test(href)) {
        tokens[idx].attrPush(['target', '_blank']);
        tokens[idx].attrPush(['rel', 'noopener noreferrer']);
      }
    }
    return defaultRender(tokens, idx, options, env, self);
  };

  eleventyConfig.setLibrary("md", md);

  // Passthrough copy for assets like css, images, etc.
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/**/*.zip");
  eleventyConfig.addPassthroughCopy("src/**/*.lha");
  eleventyConfig.addPassthroughCopy("src/**/*.mid");
  eleventyConfig.addPassthroughCopy("src/**/*.pdf");
  eleventyConfig.addPassthroughCopy("src/**/*.txt");
  eleventyConfig.addPassthroughCopy("src/**/*.jar");
  eleventyConfig.addPassthroughCopy("src/**/*.html");
  eleventyConfig.addPassthroughCopy("src/**/*.mp3");
  eleventyConfig.addPassthroughCopy("src/**/*.wav");
  eleventyConfig.addPassthroughCopy("src/**/*.ogg");
  eleventyConfig.addPassthroughCopy("src/**/*.css");
  eleventyConfig.addPassthroughCopy("src/**/*.js");
  eleventyConfig.addPassthroughCopy("src/**/*.wasm");
  eleventyConfig.addPassthroughCopy("src/**/*.map");
  eleventyConfig.addPassthroughCopy("src/**/*.json");
  eleventyConfig.addPassthroughCopy("src/**/*.woff");
  eleventyConfig.addPassthroughCopy("src/**/*.woff2");
  eleventyConfig.addPassthroughCopy("src/**/*.ttf");
  eleventyConfig.addPassthroughCopy("src/**/*.svg");
  eleventyConfig.addPassthroughCopy("src/**/*.ico");
  eleventyConfig.addPassthroughCopy("src/**/*.png");
  eleventyConfig.addPassthroughCopy("src/**/*.jpg");
  eleventyConfig.addPassthroughCopy("src/**/*.jpeg");
  eleventyConfig.addPassthroughCopy("src/**/*.gif");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "public"
    },
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: false,
    dataTemplateEngine: "njk"
  };
};
