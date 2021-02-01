module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/starlight/'
    : '/',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
};
