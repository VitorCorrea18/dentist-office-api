import * as express from 'express';
import { installmentFactory } from '../factories';


const controller = installmentFactory();
const router = express.Router();

router.put('/', (req, res, next) => {
  controller.update(req, res, next);
});

export default router;

