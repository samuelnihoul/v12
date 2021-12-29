module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js',
  },
  module: {
    rules: [{
        test: /\.mp4$/,
        use: 'file-loader?name=videos/[name].[ext]',
    },],
  },
};