import express from 'express';
import { calculateCost } from '../controllers/packagesController';
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('Hello World');
});

router.post('/calculateCost', calculateCost);

export default router;
