const fg = require("fast-glob");

const studioAImages = fg.sync(["**/img/photos/studio-a/*", "!**/_site"]);
const studioBImages = fg.sync(["**/img/photos/studio-b/*", "!**/_site"]);

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addPassthroughCopy("index.js");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addCollection("studio-a-img", function (collection) {
    return studioAImages;
  });
  eleventyConfig.addCollection("studio-b-img", function (collection) {
    return studioBImages;
  });
  return {
    dir: {
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
