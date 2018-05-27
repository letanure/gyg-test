// vue.config.js

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        use: [
          require('rupture')(),
        ],
      }
    }
  }
}