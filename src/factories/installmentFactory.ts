import { InstallmentRepository } from "../repository";
import { InstallmentController } from '../controllers/';
import { InstallmentService } from "../services";

const installmentFactory = () => {
  const installmentRepository = new InstallmentRepository();
  const service = new InstallmentService(installmentRepository);
  const controller = new InstallmentController(service);
  return controller;
}

export default installmentFactory;
