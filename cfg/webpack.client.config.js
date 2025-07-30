const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const GLOBAL_CSS_REGEXP = /\.global\.css$/; // 4.3 будет добавляться надпись global для глобаотных стилей

function setupDevtool() {
  if (IS_DEV) return 'eval';
  return false;
}

module.exports = {
  mode: NODE_ENV ? NODE_ENV : 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom',
    },
  },
  entry: [path.resolve(__dirname, '../src/client/index.jsx'), 'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr'],
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: 'client.js',
    publicPath: '/static/',
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
          },
        ],
        exclude: GLOBAL_CSS_REGEXP, // 4.3 будет матчить все css файлы кроме global
      },
      {
        test: GLOBAL_CSS_REGEXP, // 4.3
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  devtool: setupDevtool(),
  plugins: IS_DEV ? [new CleanWebpackPlugin(), new HotModuleReplacementPlugin()] : [],
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};
