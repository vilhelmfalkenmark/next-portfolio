require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: [['@babel/preset-env']],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          root: "'./'",
          components: './src/components',
          hocs: './src/hocs',
          styles: './src/styles',
          store: './store',
          router: './router',
          api: './server/api',
          utils: './utils'
        }
      }
    ]
  ]
});

require('./server');
