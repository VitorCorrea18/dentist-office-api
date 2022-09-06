import * as express from 'express';
import { treatmentFactory } from '../factories';


const controller = treatmentFactory();
const router = express.Router();

router.get('/', (req, res, next) => {
  controller.getAll(req, res, next);
});

export default router;

