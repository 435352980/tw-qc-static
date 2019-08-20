const merge = require('webpack-merge');
const base = require('./webpack.base');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BUILD_DIR } = require('./pathConfigs');

module.exports = merge(base, {
  mode: 'production',
  optimization: {
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      cleanOnceBeforeBuildPatterns: [BUILD_DIR],
    }),
  ],
});
