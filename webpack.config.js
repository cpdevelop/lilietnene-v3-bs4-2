const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

const VENDOR_LIBS = [
  'jquery',
  'bootstrap'
];

const publidDir = path.join(__dirname, '/dist');

module.exports = [
  {
    entry: {
      bundle: './src/js/index.js',
      vendor: VENDOR_LIBS
    },
    output: {
      path: publidDir,
      publicPath: '',
      filename: '[name].[chunkhash].js'
    },
    module: {
      loaders: [
        {
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        },
        {
          test: /\.html/,
          loader: require.resolve('html-loader')
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest']
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ]
  },
];


  // {
  //   entry: {
  //     style: './src/styles/index.scss'
  //   },
  //   output: {
  //     path: publidDir,
  //     publicPath: '/',
  //     filename: 'bundle.css'
  //   },
  //   module: {
  //     loaders: [
  //       {
  //         test: /\.css$/,
  //         loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
  //       },
  //       {
  //         test: /\.scss$/,
  //         loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
  //       }
  //     ]
  //   },
  //   plugins: [
  //     new ExtractTextPlugin('bundle.css'),
  //   ]
  // }
