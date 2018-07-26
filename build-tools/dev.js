import { merge } from 'lodash';
import Webpack from 'webpack';
import DevServer from 'webpack-dev-server';

import config from './config/webpack.config.development';

const PORT = process.env.PORT || 9000;
const HOST = process.env.HOST || 'localhost';

DevServer.addDevServerEntrypoints(
  config,
  merge({}, config.devServer, {
    host: HOST,
    port: PORT
  })
);

const compiler = Webpack(config);
const server = new DevServer(compiler, config.devServer);

server.listen(PORT, HOST, () => console.log(`dev server running at http://${HOST}:${PORT}`));
