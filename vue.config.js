const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/marcbarbeau.com/'
    : '/',
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  },
};

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('sass-loader')
    .options({
      includePaths: ['node_modules'],
      data: `
          @import "@/styles /imports.scss";
        `
    })
}
