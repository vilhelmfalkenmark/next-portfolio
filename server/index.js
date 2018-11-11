import express from 'express';
import next from 'next';

import api from 'api';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
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
      app.render(req, res, '/StartPage', queryParams);
    });

    server.get('/projekt/:slug/', (req, res) => {
      const queryParams = { title: req.params.id };
      app.render(req, res, '/ProjectDetailsPage', queryParams);
    });

    server.get('/projekt', (req, res) => {
      const queryParams = { title: req.params.id };
      app.render(req, res, '/ProjectsPage', queryParams);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
