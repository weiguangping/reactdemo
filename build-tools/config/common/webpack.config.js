import HtmlWebpackPlugin from 'html-webpack-plugin';
import { projectPath, paths } from '../config';

import babelConfig from './babel.config';

const config = {
  output: {
    path: projectPath(paths.build),
    filename: '[name].[hash].js'
  },
  target: 'web',
  plugins: [
    new HtmlWebpackPlugin({
      template: projectPath(paths.source, 'index.html'),
      inject: 'body',
      minify: {
        collapseWhitespace: true
      }
    })
  ],
  resolve: {
    modules: [projectPath(paths.source), 'node_modules'],
    extensions: ['*', '.js']
  },
  module: {
    rules: [
      // JS
      {
        test: /\.jsx?$/,
        include: [projectPath(paths.source)],
        use: [
          {
            loader: 'babel-loader',
            options: babelConfig
          }
        ]
      },

      // Images
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          outputPath: 'assets/img/',
          name: '[name].[hash].[ext]'
        }
      },

      // SVG
      {
        test: /\.svg$/,
        loader: 'svg-react-loader'
      }
    ]
  }
};

export default config;
