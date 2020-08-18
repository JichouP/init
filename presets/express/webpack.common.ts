import webpack from 'webpack';
import path from 'path';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import webpackNodeExternals from 'webpack-node-externals';

const rules: webpack.RuleSetRule[] = [
  {
    test: /\.tsx?$/,
    exclude: /(node_modules|\.webpack)/,
    use: {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    },
  },
];

const module: webpack.Module = {
  rules,
};

const config: webpack.Configuration = {
  target: 'node',
  entry: './src/app.ts',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module,
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      '@models': path.resolve(__dirname, 'src', 'models'),
      '@routes': path.resolve(__dirname, 'src', 'routes'),
      '@utils': path.resolve(__dirname, 'src', 'utils'),
    },
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
  externals: [webpackNodeExternals()],
};

export default config;
