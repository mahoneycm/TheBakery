module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addPassthroughCopy("img");
  return {
    dir: {
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};