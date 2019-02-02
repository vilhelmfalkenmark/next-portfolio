import express from 'express';
import promiseResolve from 'utils/helpers/promises';
import { experiencesApiResponse } from 'api/experiences/formatter';

const router = express.Router();

export default contentful => {
  router
    .route('/')
    //////////////////////////////////////////
    // GET REQUEST FOR ALL EXPERIENCES
    //////////////////////////////////////////
    .get((_, res) => {
      const projects = contentful
        .getEntries({
          content_type: 'experience'
        })
        .then(entry => experiencesApiResponse(entry))
        .catch(err => {
          console.error(err); // eslint-disable-line
          return 'Kunde inte hämta erfarenheter från contentful';
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
