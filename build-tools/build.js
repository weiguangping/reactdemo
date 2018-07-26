import { merge } from 'lodash';
import Webpack from 'webpack';
import config from './config/webpack.config.production';

Webpack(config).run((err, stats) => {
  if (err) {
    return console.error(err);
  }
  console.log(stats.toString({ colors: true }));
});
