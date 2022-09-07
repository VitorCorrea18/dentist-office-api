import * as express from 'express';
import { patientFactory } from '../factories';
import { Validation } from '../middlewares/';


const controller = patientFactory();
const validation = new Validation();
const router = express.Router();

router.get('/', (req, res, next) => {
  controller.getAll(req, res, next);
});

router.post('/', validation.patient, (req, res, next) => {
  controller.create(req, res, next);
});

export default router;

