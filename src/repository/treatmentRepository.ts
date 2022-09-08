import TreatmentModel from '../database/models/treatmentModel';
import { ITreatment, ITreatmentModel } from '../protocols/';

export default class TreatmentRepository implements ITreatmentModel {
  constructor(private model = TreatmentModel) {
    this.model = model;
  }


  async getAll(): Promise<ITreatment[]> {
    const result = await this.model.findAll();
    return result as unknown as ITreatment[];
  }

  async getById(id: number): Promise<ITreatment> {
    const result = await this.model.findByPk(id);
    return result as unknown as ITreatment;
  }
}
