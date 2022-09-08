import { TreatmentRepository } from "../repository";
import { TreatmentController } from '../controllers/';
import { TreatmentService } from "../services";

const treatmentFactory = () => {
  const treatmentRepository = new TreatmentRepository();
  const service = new TreatmentService(treatmentRepository);
  const controller = new TreatmentController(service);
  return controller;
}

export default treatmentFactory;
