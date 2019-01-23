import express from 'express';
import next from 'next';
import api from 'api';
import version from 'server/version';
import { environmentIsDev } from 'utils/constants/environmentVariables';

const routerConfig = require('router/config');

const app = next({ dev: environmentIsDev });
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 1337;
const { projectsPage, experiencesPage, startPage, skillsPage } = routerConfig;

app
  .prepare()
  .then(() => {
    const server = express();
    /**
     * API SETUP
     */
    server.use('/api', api());
    /**
     * API SETUP
     */
    server.use('/version', version());

    /**
     * PAGES
     */
    server.get(startPage.routePattern, (req, res) => {
      app.render(req, res, startPage.page);
    });

    server.get(projectsPage.routePattern, (req, res) => {
      app.render(req, res, projectsPage.page);
    });

    server.get(skillsPage.routePattern, (req, res) => {
      app.render(req, res, skillsPage.page);
    });

    server.get(experiencesPage.routePattern, (req, res) => {
      app.render(req, res, experiencesPage.page);
    });

    /**
     * 404
     */
    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${PORT}`); // eslint-disable-line
    });
  })
  .catch(ex => {
    console.error(ex.stack); // eslint-disable-line
    process.exit(1);
  });
