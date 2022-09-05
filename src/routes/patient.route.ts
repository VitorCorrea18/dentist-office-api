import * as express from 'express';
import { patientFactory } from '../factories';


const controller = patientFactory();
const router = express.Router();

router.get('/', (req, res, next) => {
  controller.getAll(req, res, next);
});

export default router;

