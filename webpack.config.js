const path = require('path');
const defaultConfig = require('@open-wc/building-webpack/default-config');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = defaultConfig({
  indexHTML: path.resolve(__dirname, './src/index.html'),
  indexJS: path.resolve(__dirname, './src/index.js'),
});
