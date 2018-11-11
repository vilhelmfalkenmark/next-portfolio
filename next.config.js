const withSass = require('@zeit/next-sass');
const path = require('path');
const CLIENT_PATH = path.join(__dirname, 'src');

module.exports = {
  // useFileSystemPublicRoutes: false,
  ...withSass({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[name]_[local]'
    },
    webpack(config, { dev, isServer }) {
      config.resolve.extensions.push('.scss');
      config.resolve.alias.styles = path.resolve(CLIENT_PATH, 'styles');
      return config;
    }
  })
};
