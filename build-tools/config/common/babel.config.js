import { browsers } from '../config';

export default {
  babelrc: false,
  cacheDirectory: true,
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        targets: { browsers },
        modules: false,
        loose: true,
        useBuiltIns: 'usage'
      }
    ]
  ],
  plugins: [
    'react-hot-loader/babel',
    '@babel/plugin-syntax-decorators',
    'babel-plugin-transform-decorators-legacy',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    "@babel/plugin-proposal-optional-chaining"
  ]
};
