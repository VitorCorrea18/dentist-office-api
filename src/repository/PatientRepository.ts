import PatientModel from '../database/models/patientModel';
import { IPatient, IPatientModel, IData } from '../protocols';

export default class PatientRepository implements IPatientModel {

  constructor(private model = PatientModel) {
    this.model = model;
  }

  async getAll(data: IData): Promise<IPatient[]> {
    const result = await this.model.findAll(data);
    return result as IPatient[];
  }

  async create(patient: IPatient): Promise<IPatient> {
    const result = await this.model.create({ ...patient });
    return result as IPatient;
  }

  async getById(data: IData): Promise<IPatient> {
    const result = await this.model.findOne(data);
    return result as IPatient;
  }
}
