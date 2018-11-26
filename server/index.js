import express from 'express';
import next from 'next';
import api from 'api';
import { environmentIsDev } from 'utils/constants/environmentVariables';

const app = next({ dev: environmentIsDev });
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 3000;

app
  .prepare()
  .then(() => {
    const server = express();
    /**
     * API SETUP
     */
    server.use('/api', api());

    /**
     * CUSTOM ROUTING
     */
    server.get('/', (req, res) => {
      const queryParams = { title: req.params.id };
      app.render(req, res, '/StartPage/StartPage', queryParams);
    });

    server.get('/projekt/:slug/', (req, res) => {
      const queryParams = { id: req.params.id, slug: req.params.slug };
      app.render(req, res, '/ProjectDetailsPage', queryParams);
    });

    server.get('/projekt', (req, res) => {
      app.render(req, res, '/ProjectsPage');
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000'); // eslint-disable-line
    });
  })
  .catch(ex => {
    console.error(ex.stack); // eslint-disable-line
    process.exit(1);
  });
