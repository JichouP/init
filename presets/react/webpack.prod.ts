import merge from 'webpack-merge';
import common from './webpack.common';
import { prod } from './babel.config';

export default merge(common, {
  mode: 'production',
});
