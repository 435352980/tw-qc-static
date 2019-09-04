const path = require('path');
const chalk = require('chalk'); // 颜色
const dotenv = require('dotenv');
const webpack = require('webpack');
const tsImportPluginFactory = require('ts-import-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin'); // 命令行进度条插件

const { ROOT_DIR, BUILD_DIR, SOURCE_DIR, NODE_MODULES_DIR, STATIC_DIR } = require('./pathConfigs');

dotenv.config();
const { APP_NAME, APP_VERSION } = process.env;

module.exports = {
  // target: 'electron-renderer',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: { '@': SOURCE_DIR },
  },
  entry: {
    app: path.join(SOURCE_DIR, 'App.tsx'),
  },
  output: {
    filename: 'js/[name][hash:8].js',
    path: BUILD_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(jsx|tsx|js|ts)$/,
        include: SOURCE_DIR,
        exclude: NODE_MODULES_DIR,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            getCustomTransformers: () => ({
              compilerOptions: { module: 'es2015' },
              before: [
                tsImportPluginFactory([
                  // { libraryName: 'antd', libraryDirectory: 'lib', style: true },
                  {
                    libraryName: '@material-ui/core',
                    libraryDirectory: '',
                    camel2DashComponentName: false,
                  },
                ]),
              ],
            }),
          },
        },
      },
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          'css-loader',
          { loader: 'less-loader', options: { javascriptEnabled: true } },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        use: [{ loader: 'url-loader', options: { limit: 8192, name: 'assets/[name].[ext]' } }],
      },
    ],
  },
  plugins: [
    new ProgressBarPlugin({
      format: `  build [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`,
    }),
    // 程序名称，版本
    new webpack.DefinePlugin({
      APP_NAME: JSON.stringify(APP_NAME),
      APP_VERSION: JSON.stringify(APP_VERSION),
    }),
    // 复制静态文件
    new CopyWebpackPlugin([{ from: STATIC_DIR, to: path.join(BUILD_DIR, 'resources') }]),
    new HtmlWebpackPlugin({
      inject: 'body',
      // favicon: path.join(ROOT_DIR, 'app.ico'),
      title: `${APP_NAME}`,
      template: path.join(SOURCE_DIR, 'index.html'),
    }),
  ],
};
