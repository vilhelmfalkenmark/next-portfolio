const withSass = require('@zeit/next-sass');

module.exports = {
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     // console.log(config, ' <-- config');
  //     Promise.resolve(config.entry).then(() => {
  //       config.entry.push(require.resolve('lazysizes'));
  //     });

  //     // config.entry.preview.push(require.resolve('lazysizes'));
  //     // config.entry.push('lazysizes/plugins/bgset/ls.bgset');
  //     // config.entry.push('lazysizes');
  //   }
  //   // Perform customizations to webpack config
  //   // Important: return the modified config
  //   return config;
  // },
  useFileSystemPublicRoutes: false,
  ...withSass({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[name]_[local]'
    }
  })
};
