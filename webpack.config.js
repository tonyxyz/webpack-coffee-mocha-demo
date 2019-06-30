const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const distdir = path.resolve(__dirname, 'dist')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: distdir
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: distdir,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.coffee$/,
        use: [
          {
            loader: 'coffee-loader',
          }
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]

};
