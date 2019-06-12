const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const paths = require('./paths');

const env = process.env.NODE_ENV;

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${paths.APP}/index.html`,
  filename: 'index.html',
  inject: 'body',
  favicon: `${paths.ASSETS}/images/favicon.ico`
});

const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
  filename: 'styles.css'
});

const CopyWebpackPluginConfig = new CopyWebpackPlugin([
  { from: 'assets/images', to: 'assets/images' }
]);

module.exports = {
  mode: env,
  entry: {
    main: `${paths.APP}/index.js`
  },
  devtool: 'source-map',
  plugins: [
    HtmlWebpackPluginConfig,
    MiniCssExtractPluginConfig,
    CopyWebpackPluginConfig
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: paths.MODULES,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(c|sa|sc)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      config: paths.CONFIG,
      assets: paths.ASSETS,
      components: paths.COMPONENTS
    },
    extensions: ['.js', '.json', '.jsx']
  }
};
