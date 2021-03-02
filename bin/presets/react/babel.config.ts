import { TransformOptions } from '@babel/core';
import path from 'path';

export const dev: TransformOptions = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@': path.resolve(__dirname, 'src'),
        },
      },
    ],
  ],
  sourceMaps: true,
};

export const prod: TransformOptions = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@': path.resolve(__dirname, 'src'),
        },
      },
    ],
  ],
};
