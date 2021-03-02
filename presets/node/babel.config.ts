import { TransformOptions } from '@babel/core';
import path from 'path';

export const dev: TransformOptions = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
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
} as TransformOptions;

export const prod: TransformOptions = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
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
} as TransformOptions;
