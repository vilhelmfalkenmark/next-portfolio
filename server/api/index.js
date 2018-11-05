import express from 'express';
import { path } from 'ramda';
const contentful = require('contentful');

import projects from 'api/projects.js';
// import experiences from 'api/experiences';
// import landingPage from 'api/landingpage';

const ENVIRONMENT = process.env;

require('dotenv').config();

const router = express.Router();

const apiKeys = {
  CONTENTFUL_SPACE: path(['CONTENTFUL_SPACE'], ENVIRONMENT),
  CONTENTFUL_ACCESS_TOKEN: path(['CONTENTFUL_ACCESS_TOKEN'], ENVIRONMENT)
};

const contentfulClient = contentful.createClient({
  space: apiKeys.CONTENTFUL_SPACE,
  accessToken: apiKeys.CONTENTFUL_ACCESS_TOKEN
});

export default () => {
  router.get('/', (req, res) => {
    res.json({ message: 'Välkommen till mitt Portfolio API' });
  });
  router.use('/projects/', projects(contentfulClient));

  return router;
};
