import merge from 'webpack-merge';
import common from './webpack.common';
import { dev } from './babel.config';

export default merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: dev,
      },
    ],
  },
});
