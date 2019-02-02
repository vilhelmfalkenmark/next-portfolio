import express from 'express';
import promiseResolve from 'utils/helpers/promises';
import { projectsApiResponse } from 'api/projects/formatter';

const router = express.Router();

export default contentful => {
  router
    .route('/')
    //////////////////////////////////////////
    // GET REQUEST FOR ALL PROJECTS
    //////////////////////////////////////////
    .get((_, res) => {
      const projects = contentful
        .getEntries({
          content_type: 'projects'
        })
        .then(entry => projectsApiResponse(entry))
        .catch(err => {
          console.error(err); // eslint-disable-line
          return 'Kunde inte hämta projects från contentful';
        });
      promiseResolve(projects)
        .then(data => {
          res.json({
            data
          });
        })
        .catch(e => {
          console.error(e); // eslint-disable-line
          res.status(404);
        });
    });

  return router;
};
