import merge from 'webpack-merge';
import common from './webpack.common';
import { prod } from './babel.config';

export default merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: prod,
      },
    ],
  },
});
