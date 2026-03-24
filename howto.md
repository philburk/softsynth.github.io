# How to Maintain the SoftSynth Website

This file documents how to work with the modern Markdown-driven site, relying solely on Eleventy components without using the legacy conversion script.

**Important:** You should no longer use or run `convert.js`. The single source of truth is now the hand-editable `.md` files in the `src/` directory.

## 1. Editing the Markdown to Add or Change Menus

Every rendered page across the site pulls its menu location and title from the YAML front-matter block at the top of its corresponding Markdown file.

To add a new menu item or change an existing one, edit the front-matter data:

```yaml
---
title: My New Piece
eleventyNavigation:
  key: /hmsl/my_new_piece/
  title: My New Piece
  parent: /hmsl/
  order: 5
---
```

*   **`key`**: A uniquely identifying absolute path representing this menu node (e.g. `/hmsl/my_new_piece/`).
*   **`title`**: The human-readable text you want shown in the dropdown menu.
*   **`parent`**: The `key` of the parent dropdown this page belongs to (e.g. `/hmsl/` or `/jsyn/`).
*   **`order`**: An optional integer specifying the sort priority of this item within its parent's menu.

## 2. Passing Javascript and HTML Through to the Website

You can inject fully interactive raw HTML or JavaScript features natively into any Markdown file. Since the Eleventy parser maps directly to the browser, anything you write inside a `.md` file that uses standard HTML syntax will render exactly as expected.

For example, to embed an applet or Javascript widget within a Markdown document:

```html
This is normal Markdown text describing my widget.

<div id="demo-app" style="border: 1px solid black; padding: 10px;">
    Loading app...
</div>

<script>
    document.getElementById('demo-app').innerHTML = "<b>Interactive Javascript Applet initialized!</b>";
</script>

This is more Markdown text following the widget.
```

## 3. The Files Controlling the Markdown to HTML Conversion

The underlying mechanism that converts your Markdown string into the final nested HTML layouts is powered entirely by Eleventy (11ty) and defined by two key files:

*   **`.eleventy.js`** (Root directory): This is the master configuration file for the site build. It controls global behaviors, sets up the `eleventyNavigation` plugin responsible for parsing the front-matter arrays, and defines any global path passthrough copying (e.g., CSS and images).
*   **`src/_includes/base.njk`**: This Nunjucks template is the singular layout skeleton that wraps around your Markdown. When Eleventy compiles a page, it merges the compiled HTML string of your Markdown file directly into this template using `{{ content | safe }}`. It also handles the actual HTML markup loop that visually renders the navigation menu.
