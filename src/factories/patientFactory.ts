import { PatientRepository, InstallmentRepository } from "../repository";
import { PatientController } from '../controllers/';
import { PatientService } from "../services";

const patientFactory = () => {
  const patientRepository = new PatientRepository();
  const installmentRepository = new InstallmentRepository();
  const service = new PatientService(patientRepository, installmentRepository);
  const controller = new PatientController(service);
  return controller;
}

export default patientFactory;
