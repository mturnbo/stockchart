const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const paths = require('./paths');

const env = process.env.NODE_ENV;

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${paths.APP}/index.html`,
  filename: 'index.html',
  inject: 'body'
});

const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
  filename: 'styles.css'
});

module.exports = {
  mode: env,
  entry: {
    main: `${paths.APP}/index.js`
  },
  devtool: 'source-map',
  plugins: [
    HtmlWebpackPluginConfig,
    MiniCssExtractPluginConfig
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
