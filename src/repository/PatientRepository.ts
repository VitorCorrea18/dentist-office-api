import PatientModel from '../database/models/patientModel';
import { IPatient, IPatientModel } from '../protocols';

export default class PatientRepository implements IPatientModel {

  constructor(private model = PatientModel) {
    this.model = model;
  }

  async getByDate(payload: object): Promise<IPatient[]> {
    const result = await this.model.findAll(payload);
    return result as IPatient[];
  }

  async create(payload: object): Promise<IPatient> {
    const result = await this.model.create({ ...payload });
    return result as IPatient;
  }
}
