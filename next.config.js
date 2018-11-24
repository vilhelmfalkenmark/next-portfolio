const withSass = require('@zeit/next-sass');
const path = require('path');
const CLIENT_PATH = path.join(__dirname, 'src');

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[name]_[local]'
  },
  webpack(config, { dev, isServer }) {
    if (!isServer) {
      Promise.resolve(config.entry()).then(entry => {
        entry['main.js'].push('lazysizes', 'lazysizes/plugins/bgset/ls.bgset');
      });
    }
    config.resolve.extensions.push('.scss');
    config.resolve.alias.styles = path.resolve(CLIENT_PATH, 'styles');
    return config;
  }
});
