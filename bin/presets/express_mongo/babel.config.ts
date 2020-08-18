import { TransformOptions } from '@babel/core';
import path from 'path';

export default {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-typescript'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@models': path.resolve(__dirname, 'src', 'models'),
          '@routes': path.resolve(__dirname, 'src', 'routes'),
          '@utils': path.resolve(__dirname, 'src', 'utils'),
        },
      },
    ],
  ],
} as TransformOptions;
