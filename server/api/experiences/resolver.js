import express from 'express';

const router = express.Router();

/**
 * Will response to api/experiences
 */
export default () => {
  router.route('/').get((_, res) => {
    res.json({
      data: [
        { type: 'Första erfarenheten' },
        { type: 'Andra erfarenheten' },
        { type: 'Tredje erfarenheten' }
      ]
    });
  });

  return router;
};
