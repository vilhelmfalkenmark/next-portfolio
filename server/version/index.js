import { Router } from 'express';

const router = Router();

export default () => {
  router.get('/', (_, res) => {
    res.json({ versions: '0.0.1' });
  });

  return router;
};
