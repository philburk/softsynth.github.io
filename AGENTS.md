# SoftSynth.com Website

## Overview

- **Source content**: Markdown format located in `src/`.
- **Static Site Generator**: Eleventy (11ty) v3.
- **Hosting**: GitHub Pages serving the output directory `public/`.
- **Live URL**: https://softsynth.com

## Build & Run

- **Build**: `npm run build` (runs `eleventy`, outputs to `public/`)
- **Dev Server**: `npm start` (runs `eleventy --serve`)

## Project Structure & Key Files

- `.eleventy.js`: Eleventy configuration.
  - Input directory: `src/`
  - Output directory: `public/`
  - Uses `markdown-it` configured to open external links in new tabs.
  - Passes through assets (`.css`, `.js`, images, audio, etc.) from `src/` to `public/`.
- `src/_includes/base.njk`: Master Nunjucks template used by all pages (`layout: base.njk`).
  - Contains site header, logo, mobile navigation toggle, and footer.
  - Navigation menu is generated using `@11ty/eleventy-navigation`.
  - Main page content renders inside `<div class="app-wrapper"><main>{{ content | safe }}</main></div>`.
- `src/style.css`: Primary stylesheet linked by `base.njk` (passthrough copied to `public/style.css`).
  - Top section: Legacy styling from the original website.
  - Modern Layout section: Uses CSS variables (`--primary`, `--surface`, etc.), Google Font 'Inter', navigation dropdowns, responsive/mobile drawer styling, and print rules.
  - Note: `src/style_beta.css` and `src/style.html` are deprecated legacy files.
