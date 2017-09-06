module.exports = {
  watch: true,
  entry: './example/example.js',
  output: {
    filename: './example/dist/example.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};
