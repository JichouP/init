import webpack from 'webpack';
import path from 'path';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const rules: webpack.RuleSetRule[] = [
  {
    test: /\.css$/,
    use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
  },
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

const _module: webpack.Module = {
  rules,
};

const config: webpack.Configuration = {
  target: 'node',
  entry: './src/index.tsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: _module,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    alias: {
      '@assets': path.resolve(__dirname, 'src', 'assets'),
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@constants': path.resolve(__dirname, 'src', 'constants'),
      '@screens': path.resolve(__dirname, 'src', 'screens'),
      '@utils': path.resolve(__dirname, 'src', 'utils'),
      '@contexts': path.resolve(__dirname, 'src', 'contexts'),
      '@store': path.resolve(__dirname, 'src', 'stores', 'store'),
      '@color': path.resolve(__dirname, 'src', 'constants', 'color'),
    },
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html'), filename: 'index.html' }),
  ],
};

export default config;
