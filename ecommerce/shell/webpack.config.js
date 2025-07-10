const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { join } = require('path');

module.exports = {
  mode: 'development',
  output: {
    path: join(__dirname, '../dist/shell'),
    publicPath: 'auto',
  },
  devServer: {
    port: 4200,
  },
  plugins: [
    new NxAppWebpackPlugin({
      tsConfig: './tsconfig.app.json',
      compiler: 'swc',
      main: './src/main.ts',
      index: './src/index.html',
      baseHref: '/',
      assets: ['./src/favicon.ico', './src/assets'],
      styles: ['./src/styles.css'],
      outputHashing: process.env['NODE_ENV'] === 'production' ? 'all' : 'none',
      optimization: process.env['NODE_ENV'] === 'production',
    }),
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        'mf-header': 'mfheader@http://localhost:4201/remoteEntry.js',
        'mf-catalog': 'mfcatalog@http://localhost:4202/remoteEntry.js',
        'mf-recommendations': 'mfrecommendations@http://localhost:4203/remoteEntry.js',
        'mf-cart': 'mfcart@http://localhost:4204/remoteEntry.js',
      },
    }),
  ],
};
