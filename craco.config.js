const CracoLessPlugin = require('craco-less');
const path = require('path');
const resolve = (dir) => path.resolve(__dirname, dir);
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components'),
    },
  },
  devServer: {
    proxy: {
      '/api/': {
        target: 'http://127.0.0.1:1997',
        changeOrigin: true,
        pathRewrite: {
          '^/api/': '/',
        },
      },
    },
  },
};
