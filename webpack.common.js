const glob = require('glob');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  cache: true,
  showErrors: true,
  template: path.join(__dirname, 'src/index.html'),
});

module.exports = {
  entry: glob
    .sync(path.join(__dirname, './src/**/*.worker.js'))
    .reduce((accum, filePath) => {
      const entry = path.basename(filePath);
      accum[`WebWorkers/${entry}`] = filePath;
      return accum;
    }, {
      'bundle.js': path.join(__dirname, 'src/index.jsx'),
    }),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      }
    ],
  },
  resolve: {
    extensions: [
      '.js', 
      '.jsx', 
    ],
  },
  plugins: [
    htmlWebpackPlugin,
  ],
}
