const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@themes': path.resolve(__dirname, 'src/themes'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@definitions': path.resolve(__dirname, 'src/consts'),
      '@pages': path.resolve(__dirname, 'src/pages')
    },
  };

  return config;
};