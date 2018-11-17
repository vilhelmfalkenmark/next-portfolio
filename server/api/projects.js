import express from 'express';
import promiseResolve from 'utils/helpers/promises';
import {
  projectsApiResponse,
  projectByIdApiResponse
} from 'utils/selectors/projects';

const router = express.Router();

export default contentful => {
  router
    .route('/')
    //////////////////////////////////////////
    // GET REQUEST FOR ALL PROJECTS
    //////////////////////////////////////////
    .get((req, res) => {
      const projects = contentful
        .getEntries({
          content_type: 'projects'
        })
        .then(entry => entry)
        .then(entry => projectsApiResponse(entry))
        .catch(err => {
          console.error(err);
          return 'Kunde inte hämta projects från contentful';
        });
      promiseResolve(projects)
        .then(data => {
          res.json({
            data
          });
        })
        .catch(e => {
          console.error(e);
          res.status(404);
        });
    });
  //////////////////////////////////////////
  // GET REQUEST FOR SINGLE PROJECT
  //////////////////////////////////////////
  router.route('/:slug').get((req, res) => {
    const projects = contentful
      .getEntry(req.query.id)
      .then(entry => projectByIdApiResponse(entry))
      .catch(err => {
        console.error(err);
        return `Kunde inte hämta ${req.url} från contentful`;
      });
    promiseResolve(projects)
      .then(data => {
        if (!data) {
          res.status(404);
        }
        res.json({
          data
        });
      })
      .catch(err => {
        console.error(err);
        res.status(404);
      });
  });

  return router;
};
