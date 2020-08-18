import { exec } from 'child_process';
import fs from 'fs-extra';
import path from 'path';
import { format } from 'prettier';
import { presets } from './constants';
import { spinner } from './cli';

const lintstaged = {
  husky: {
    hooks: {
      'pre-commit': 'lint-staged',
    },
  },
  'lint-staged': {
    '*.{md,html,css}': ['prettier --write', 'git add'],
    '*.{ts,tsx}': ['prettier --write', 'eslint --fix', 'git add'],
  },
};

export const react = async () => {
  const dependencies = ['react', 'react-dom', 'styled-components'];
  const devDependencies = [
    '@babel/core',
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
    '@testing-library/react',
    '@types/jest',
    '@types/react',
    '@types/react-dom',
    '@types/react-test-renderer',
    '@types/styled-components',
    '@types/webpack',
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint/parser',
    'babel-jest',
    'babel-plugin-module-resolver',
    'eslint',
    'eslint-config-prettier',
    'eslint-import-resolver-webpack',
    'eslint-plugin-import',
    'eslint-plugin-prettier',
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',
    'fork-ts-checker-webpack-plugin',
    'html-webpack-plugin',
    'husky',
    'jest',
    'lint-staged',
    'prettier',
    'react-test-renderer',
    'style-loader',
    'ts-loader',
    'ts-node',
    'webpack',
    'webpack-cli',
    'webpack-dev-server',
    'webpack-merge',
    'typescript',
  ];
  const scripts = {
    start: 'webpack-dev-server --config webpack.dev.ts',
    build: 'webpack --config webpack.prod.ts',
    test: 'jest --color',
    testWithUpdateSnapshot: 'jest -u --color',
    testWithCoverage: 'jest --collectCoverage --color',
    openCoverage: 'sensible-browser ./coverage/lcov-report/index.html',
    tsc_babel: 'tsc babel.config.ts --esModuleInterop --lib es5',
  };
  spinner.start();
  await npm(dependencies, devDependencies);
  copyPreset('react');
  assignPackageJson({ scripts });
  await tscBabel();
  spinner.done();
};

export const express = async () => {
  const dependencies = ['express'];
  const devDependencies = [
    '@babel/core',
    '@babel/preset-env',
    '@babel/preset-typescript',
    '@types/express',
    '@types/jest',
    '@types/sinon-express-mock',
    '@types/supertest',
    '@types/webpack',
    '@types/webpack-node-externals',
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint/parser',
    'babel-jest',
    'babel-plugin-module-resolver',
    'eslint',
    'eslint-config-prettier',
    'eslint-plugin-prettier',
    'fork-ts-checker-webpack-plugin',
    'husky',
    'jest',
    'lint-staged',
    'prettier',
    'prettier',
    'sinon',
    'sinon-express-mock',
    'supertest',
    'ts-loader',
    'ts-node',
    'typescript',
    'webpack',
    'webpack-cli',
    'webpack-merge',
    'webpack-node-externals',
  ];
  const scripts = {
    serve: 'node dist/app.js',
    build: 'webpack --config webpack.prod.ts',
    test: 'jest --color',
    testWithCoverage: 'jest --collectCoverage --color',
    openCoverage: 'sensible-browser ./coverage/lcov-report/index.html',
    tsc_babel: 'tsc babel.config.ts --esModuleInterop --lib es5',
  };
  spinner.start();
  await npm(dependencies, devDependencies);
  copyPreset('express');
  assignPackageJson({ scripts });
  await tscBabel();
  spinner.done();
};

export const express_mongo = async () => {
  const dependencies = ['express', 'mongoose'];
  const devDependencies = [
    '@babel/core',
    '@babel/preset-env',
    '@babel/preset-typescript',
    '@shelf/jest-mongodb',
    '@types/express',
    '@types/jest',
    '@types/mongoose',
    '@types/sinon-express-mock',
    '@types/supertest',
    '@types/webpack',
    '@types/webpack-node-externals',
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint/parser',
    'babel-jest',
    'babel-plugin-module-resolver',
    'eslint',
    'eslint-config-prettier',
    'eslint-plugin-prettier',
    'fork-ts-checker-webpack-plugin',
    'husky',
    'jest',
    'lint-staged',
    'prettier',
    'prettier',
    'sinon',
    'sinon-express-mock',
    'supertest',
    'ts-loader',
    'ts-node',
    'typescript',
    'webpack',
    'webpack-cli',
    'webpack-merge',
    'webpack-node-externals',
  ];
  const scripts = {
    serve: 'node dist/app.js',
    build: 'webpack --config webpack.prod.ts',
    test: 'jest --color',
    testWithCoverage: 'jest --collectCoverage --color',
    openCoverage: 'sensible-browser ./coverage/lcov-report/index.html',
    tsc_babel: 'tsc babel.config.ts --esModuleInterop --lib es5',
  };
  spinner.start();
  await npm(dependencies, devDependencies);
  copyPreset('express_mongo');
  assignPackageJson({ scripts });
  await tscBabel();
  spinner.done();
};

const npm = (dependencies: string[], devDependencies: string[], config?: {}): Promise<void> => {
  spinner.setText('npm init');
  return new Promise((res, rej) => {
    // init
    exec(`npm init -y`, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return rej(err);
      }
      // install dependencies
      spinner.setText('Installing Dependencies');
      exec(`npm i ${dependencies.join(' ')}`, (err, stdout, stderr) => {
        if (err) {
          console.error(err);
          return rej(err);
        }
        // install devDependencies
        spinner.setText('Installing devDependencies');
        exec(`npm i -D ${devDependencies.join(' ')}`, (err, stdout, stderr) => {
          if (err) {
            console.error(err);
            return rej(err);
          }
          res();
        });
      });
    });
  });
};

const copyPreset = (preset: keyof typeof presets): void => {
  spinner.setText('Copying configuration files');
  fs.copySync(path.resolve(__dirname, 'presets', preset), path.resolve(process.cwd()));
  return;
};

const assignPackageJson = (obj: {}) => {
  spinner.setText('Configuring npm scripts, husky and lint staged');
  const original = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'package.json')).toString());
  fs.writeFileSync(
    path.resolve(process.cwd(), 'package.json'),
    format(JSON.stringify({ ...original, ...lintstaged, ...obj }), { parser: 'json-stringify' })
  );
  return;
};

const tscBabel = (): Promise<void> => {
  spinner.setText('Transpiling babel.config.ts');
  return new Promise((res, rej) => {
    exec(`npm run tsc_babel`, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return rej(err);
      }
      res();
    });
  });
};
