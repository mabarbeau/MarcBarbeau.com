
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/marcbarbeau.com/'
    : '/',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'sass-loader',
              options: {
                includePaths: ['node_modules'],
              },
            },
          ],
        },
      ],
    },
  },
};
