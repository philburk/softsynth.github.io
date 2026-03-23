const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

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

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "public"
    },
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
