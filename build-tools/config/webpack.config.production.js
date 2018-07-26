import merge from 'webpack-merge';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import { projectPath, paths } from './config';
import common from './common/webpack.config';
import cssConfig from './common/css.config';
import postcssConfig from './common/postcss.config';
import sassConfig from './common/sass.config';

const extractStyles = new ExtractTextPlugin({
  filename: '[name].[hash].css',
  allChunks: true
});

export default merge(common, {
  mode: 'production',
  entry: {
    app: projectPath(paths.source, 'index')
  },
  plugins: [
    extractStyles
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: extractStyles.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            }
          ]
        })
      },
      {
        test: /\.scss$/,
        loader: extractStyles.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: cssConfig
            },
            {
              loader: 'postcss-loader',
              options: postcssConfig
            },
            {
              loader: 'resolve-url-loader'
            },
            {
              loader: 'sass-loader',
              options: sassConfig(projectPath)
            }
          ]
        })
      }
    ]
  }
});
