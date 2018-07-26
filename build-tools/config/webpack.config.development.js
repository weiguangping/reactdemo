import webpack from 'webpack';
import merge from 'webpack-merge';

import { projectPath, paths } from './config';
import common from './common/webpack.config';
import cssConfig from './common/css.config';
import postcssConfig from './common/postcss.config';
import sassConfig from './common/sass.config';

export default merge(common, {
  mode: 'development',
  entry: {
    app: ['react-hot-loader/patch', projectPath(paths.source, 'index')]
  },
  devServer: {
    hot: true,
    disableHostCheck: true,
    historyApiFallback: true,
    stats: {
      colors: true
    }
  },
  devtool: 'source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        include: projectPath(paths.source),
        loader: 'eslint-loader',
        options: {
          emitWarning: true
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              ...cssConfig,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ...postcssConfig,
              sourceMap: true
            }
          },
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'sass-loader',
            options: sassConfig(projectPath)
          }
        ]
      }
    ]
  }
});
