require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: [['@babel/preset-env']],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          components: './src/components',
          hocs: './src/hocs',
          store: './src/store',
          styles: './src/styles',
          routes: './routes',
          api: './server/api',
          utils: './utils'
        }
      }
    ]
  ]
});

require('./index');
