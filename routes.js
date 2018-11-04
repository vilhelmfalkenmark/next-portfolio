// const nextRoutes = require('next-routes');
// const routes = (module.exports = nextRoutes());

// routes.add('blog', '/blog/:slug');
// routes.add('about', '/about-us/:foo(bar|baz)');

const nextRoutes = require('next-routes');
const routes = (module.exports = nextRoutes());

routes
  // .add('about')
  // .add('blog', '/blog/:slug')
  // .add('projekt', '/projekt', 'profile')
  // .add('user', '/user/:id', 'profile');
  // .add('/:noname/:lang(en|es)/:wow+', 'complex')
  .add({ name: 'projekt', pattern: 'projekt', page: 'Projects' })
  .add({ name: '/', pattern: '/', page: 'LandingPage' });
