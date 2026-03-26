module.exports = {
  extraHead: '<script src="https://cjrtnc.leaningtech.com/4.2/loader.js"></script>',
  permalink: function(data) {
    const stem = data.page.inputPath.split('/').pop().replace(/\.md$/, "");
    return `/jsyn/examples/${stem}.html`;
  }
};
