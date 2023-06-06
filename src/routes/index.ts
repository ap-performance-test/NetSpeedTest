import express, { type Request, type Response } from 'express';

const router = express.Router();
/* GET home page. */
router.get('/', function (req: Request, res: Response) {
  res.render('index', { title: 'Express' });
});

// module.exports = router;
export default router;
