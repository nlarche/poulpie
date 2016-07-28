var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var srcPath = path.resolve(__dirname, 'src');
var indexHtmlPath = path.resolve(__dirname, 'index.html');
var buildPath = path.join(__dirname, 'dist');

var production = process.env.NODE_ENV === "production";

var config = {
  bail: true,
  entry: [
    './src/index.js',
  ],
  output: {
    path: buildPath,
    filename: 'bundle.js',
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: srcPath,
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: srcPath,
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss',
      },
      {
        test: /\.css$/,
        include: /bulma/,
        loader: 'style!css',
      },
      { test: /\.svg/, loader: 'svg-url-loader?noquotes' },
      { test: /\.(ico|jpe?g|png|gif)$/, loader: "file" },
    ],
  },
  resolve: {
    extensions: ['', '.js'],
  },
   devtool: 'eval',
   devServer: {
    contentBase: "./",
    colors: true,
    historyApiFallback: true,
    inline: true,
    port: 3002,
    host: "0.0.0.0",
  },
  postcss: function () {
    return [
      require('stylelint'),
      require("postcss-cssnext")({ browsers: "last 2 versions" })
    ];
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: indexHtmlPath,
    })
  ]
};

if (production) {

  config.output.filename = 'bundle.[hash].js';
  config.devServer = undefined;
  config.devtool = 'source-map';
  config.plugins = [
    new HtmlWebpackPlugin({
      inject: true,
      template: indexHtmlPath,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    }),
  ];

}


module.exports = config;
