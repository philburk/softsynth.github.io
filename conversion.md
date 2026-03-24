# SoftSynth Website Migration to Markdown

This file summarizes the migration of the legacy `softsynth.com` website from a PHP/Apache-based architecture to a modern, static Eleventy (11ty) Markdown-driven build.

## Automated Migration Pipeline
We developed a robust `convert.js` Node.js script that processed the legacy `src/` folder:
*   **AST Parsing:** It parsed `.php` files to extract only the main content body, discarding legacy server-side PHP headers, footers, and complex navigation arrays.
*   **Turndown Engine:** We mapped standard HTML tags safely to clean Markdown.
*   **Preserving Complex HTML:** To prevent standard Markdown from destroying interactive elements and legacy widgets, the Turndown engine was configured to explicitly keep complex tags like `<iframe>` (SoundCloud), `<audio>`, `<center>`, and `<script>`.
*   **Mathematical Path Recalibration:** Legacy relative paths (e.g., `src="../sounds/file.mp3"`) were automatically rewritten to absolute root-relative paths (e.g., `src="/hmsl/sounds/file.mp3"`). This ensures embedded media remains valid when Eleventy generates its clean-URL nested folder structure.

## Navigation System
The old PHP `printNavigationBar` arrays were replaced entirely with an automated `eleventyNavigation` plugin:
*   The conversion script automatically generated `eleventyNavigation` YAML front-matter and injected it into every Markdown file.
*   To resolve global namespace collisions (such as multiple instances of an "Apps" menu), the `key` identifiers were mapped to use absolute URL paths instead of simple titles.

## Custom WebAudio/WASM Setup
We successfully isolated the `coi-serviceworker.js` to strictly the `/info/fingering/praxinista/` directory. This physically resolved the cross-origin conflicts (COOP/COEP) between CheerPJ Java emulation and modern WASM/WebAudio, keeping the rest of the site fully functional for standard requests.

## Consolidated CSS
The legacy table-based dumps were modernized using a responsive CSS Grid applied in `src/style.css` and the top-level `src/index.md`. All legacy sub-site CSS was merged safely. Next iterations of the site should reference only this master stylesheet to prevent layout regressions.
