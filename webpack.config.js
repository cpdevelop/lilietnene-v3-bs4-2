/* eslint no-unused-vars: 0 */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Promise = require('bluebird');

const VENDOR_LIBS = [
  'jquery',
  'bootstrap',
  'popper.js'
];

const publidDir = path.join(__dirname, '/dist');

module.exports = [
  {
    entry: {
      // vendor: VENDOR_LIBS,
      bundle: './src/js/index.js', //['babel-polyfill','./src/js/index.js']
    },
    output: {
      path: publidDir,
      publicPath: '',
      filename: '[name].js' //[name].[chunkhash.js
    },
    module: {
      loaders: [
        {
          exclude: /node_modules/,
          loader: 'babel-loader',
          // query: {
          //   presets: ['es2015-ie']
          // }
        },
        {
          test: /\.html/,
          loader: require.resolve('html-loader')
        }
      ],
      rules: [{
            test: /\.(jpe?g|png|gif|svg|ico)(\?.+)?$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: './src/assets/images/[name].[ext]',
                    outputPath: 'assets/images/'
                }
            }
        }]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins: [
      new webpack.ProvidePlugin({
            'Promise': 'bluebird'
        }),
      // new webpack.optimize.CommonsChunkPlugin({
      //   names: ['vendor', 'manifest']
      // }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          drop_console: true
        }
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      }),
      new HtmlWebpackPlugin({
        filename: "brands.html",
        template: "src/brands.html"
      })
    ]
  }
];
