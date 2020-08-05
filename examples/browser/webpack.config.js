const path = require('path');
const MODULE_NAME = 'demo';

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.tsx'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    globalObject: 'this',
    // libraryExport: 'default',
    library: MODULE_NAME
  },
};
