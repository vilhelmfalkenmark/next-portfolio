const nextRoutes = require('next-routes');
const config = require('router/config');

const routes = (module.exports = nextRoutes());

const { projectsPage, experiencesPage, startPage, skillsPage } = config;

/**
 * Next routes
 */
routes
  .add({
    name: projectsPage.name,
    pattern: projectsPage.routePattern,
    page: projectsPage.page
  })
  .add({
    name: experiencesPage.name,
    pattern: experiencesPage.routePattern,
    page: experiencesPage.page
  })
  .add({
    name: startPage.name,
    pattern: startPage.routePattern,
    page: startPage.page
  })
  .add({
    name: skillsPage.name,
    pattern: skillsPage.routePattern,
    page: skillsPage.page
  });
