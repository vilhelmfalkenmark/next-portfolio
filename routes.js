const nextRoutes = require('next-routes');

const routes = (module.exports = nextRoutes());

routes
  .add({ name: 'ProjectsPage', pattern: '/projekt', page: 'ProjectsPage' })
  .add({
    name: 'ProjectDetailsPage',
    pattern: '/projekt/:slug',
    page: 'ProjectDetailsPage'
  })
  .add({ name: 'StartPage', pattern: '/', page: 'StartPage' });
