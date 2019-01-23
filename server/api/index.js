import { Router } from 'express';
import { path } from 'ramda';

import projectsResolver from 'api/projects/resolver';
import experiencesResolver from 'api/experiences/resolver';
import skillsResolver from 'api/skills/resolver';

const contentful = require('contentful');

const ENVIRONMENT = process.env;

require('dotenv').config();

const router = Router();

const apiKeys = {
  CONTENTFUL_SPACE: path(['CONTENTFUL_SPACE'], ENVIRONMENT),
  CONTENTFUL_ACCESS_TOKEN: path(['CONTENTFUL_ACCESS_TOKEN'], ENVIRONMENT)
};

const contentfulClient = contentful.createClient({
  space: apiKeys.CONTENTFUL_SPACE,
  accessToken: apiKeys.CONTENTFUL_ACCESS_TOKEN
});

export default () => {
  router.get('/', (_, res) => {
    res.json({ message: 'Välkommen till mitt Portfolio API' });
  });
  router.use('/projects', projectsResolver(contentfulClient));
  router.use('/experiences', experiencesResolver(contentfulClient));
  router.use('/skills', skillsResolver(contentfulClient));

  return router;
};
