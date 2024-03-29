const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // analyze bundle build structure

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map', // extract source maps and include in final bundle
  plugins: [
    // new BundleAnalyzerPlugin(),
  ]
});