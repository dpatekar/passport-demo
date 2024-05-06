const path = require('path');
const override = require('./config-overrides');

const baseConfig = {
  mode: 'production',
  target: 'web',
  entry: './passport.ts',
  output: {
    filename: 'passport.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'module',
    },
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  optimization: {
    minimize: true,
    usedExports: true
  },
  experiments: {
    outputModule: true,
  }
};

module.exports = override(baseConfig);