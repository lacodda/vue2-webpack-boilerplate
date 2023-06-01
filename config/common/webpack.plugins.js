const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { isDev } = require('./webpack.helpers');
const aliases = require('./webpack.aliases');

module.exports = [
  new ForkTsCheckerWebpackPlugin(),
  // Removes/cleans build folders and unused assets when rebuilding
  new CleanWebpackPlugin(),
  // Copies files from target to destination folder
  new CopyWebpackPlugin({
    patterns: [
      {
        from: aliases.public,
        to: 'assets',
        globOptions: {
          ignore: ['*.DS_Store'],
        },
        noErrorOnMissing: true,
      },
    ],
  }),
  // Generates an HTML file from a template
  // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
  new HtmlWebpackPlugin({
    title: process.env.APP_TITLE,
    favicon: aliases.images + '/logo.png',
    template: aliases.src + '/template.html', // template file
    filename: 'index.html', // output file
  }),
  new webpack.DefinePlugin({
    'process.env': JSON.stringify(process.env),
  }),
  isDev() && new webpack.HotModuleReplacementPlugin(),
  // Extracts CSS into separate files
  !isDev() && new MiniCssExtractPlugin({
    filename: 'styles/[name].[chunkhash].css',
    chunkFilename: 'styles/[name].[chunkhash].chunk.css',
  }),
  !isDev() && new WebpackShellPluginNext({
    onBuildEnd: {
      scripts: [() => {
        // eslint-disable-next-line no-console
        console.log(`APP_BUILT|${process.env.APP_NAME}|${process.env.APP_HOST}|${process.env.APP_PORT}`);
      }],
      blocking: false,
      parallel: true,
    },
  }),
].filter(Boolean);
