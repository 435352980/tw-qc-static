const webpack = require('webpack');
const merge = require('webpack-merge');
const dotenv = require('dotenv');
const base = require('./webpack.base');

const { BUILD_DIR } = require('./pathConfigs');

dotenv.config();
const { DEV_HOST, DEV_PORT } = process.env;

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  output: { publicPath: '/' },
  devServer: {
    contentBase: BUILD_DIR,
    host: DEV_HOST,
    port: DEV_PORT,
    hot: true,
    historyApiFallback: true,
    https: true,
  },
});
