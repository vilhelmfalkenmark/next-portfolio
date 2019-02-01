const withSass = require('@zeit/next-sass');
const path = require('path');
const withFonts = require('next-fonts');

const CLIENT_PATH = path.join(__dirname, 'src');

module.exports = withFonts({
  useFileSystemPublicRoutes: false,
  ...withSass({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[name]_[local]'
    },
    webpack(config, { isServer }) {
      if (!isServer) {
        Promise.resolve(config.entry()).then(entry => {
          entry['main.js'].push(
            'lazysizes',
            'lazysizes/plugins/bgset/ls.bgset'
          );
        });
      }
      config.resolve.extensions.push('.scss');
      config.resolve.alias.styles = path.resolve(CLIENT_PATH, 'styles');
      return config;
    }
  })
});
