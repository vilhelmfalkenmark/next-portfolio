import express from 'express';
import promiseResolve from 'utils/helpers/promises';
import { skillsApiResponse } from 'api/skills/formatter';

const router = express.Router();

export default contentful => {
  router
    .route('/')
    //////////////////////////////////////////
    // GET REQUEST FOR ALL PROJECTS
    //////////////////////////////////////////
    .get((_, res) => {
      const skills = contentful
        .getEntries({
          content_type: 'technices' // miss-spelled :(
        })
        .then(entry => entry)
        .then(entry => skillsApiResponse(entry))
        .catch(err => {
          console.error(err); // eslint-disable-line
          return 'Kunde inte hämta skills från contentful';
        });
      promiseResolve(skills)
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
