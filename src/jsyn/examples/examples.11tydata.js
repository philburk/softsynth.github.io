module.exports = {
  extraHead: '<script src="https://cjrtnc.leaningtech.com/4.2/loader.js"></script>',
  permalink: function(data) {
    return `/jsyn/examples/${data.page.fileSlug}.html`;
  }
};
