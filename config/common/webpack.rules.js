const { isDev } = require('./webpack.helpers');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
  {
    // Typescript loader
    test: /\.tsx?$/,
    exclude: /(node_modules|\.webpack)/,
    use: {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    },
  },
  {
    // CSS, SCSS (SASS) Loader
    test: /\.(sass|scss|css)$/,
    use: [
      { loader: isDev() ? 'style-loader' : MiniCssExtractPlugin.loader },
      {
        loader: 'css-loader',
        options: {
          importLoaders: isDev() ? 1 : 2,
          sourceMap: isDev(),
          modules: isDev(),
        },
      },
      { loader: 'postcss-loader', options: { sourceMap: isDev() } },
      { loader: 'sass-loader', options: { sourceMap: isDev() } },
    ],
  },
  {
    // Assets loader
    // More information here https://webpack.js.org/guides/asset-modules/
    test: /\.(gif|jpe?g|tiff|png|webp|bmp|svg|eot|ttf|woff|woff2)$/i,
    type: 'asset',
    generator: {
      filename: 'assets/[hash][ext][query]',
    },
  },
];

