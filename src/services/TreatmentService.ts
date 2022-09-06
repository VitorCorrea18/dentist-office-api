import { ITreatmentService, ITreatmentModel, ITreatment } from "../protocols";

export default class TreatmentService implements ITreatmentService {
  constructor(private model: ITreatmentModel) {
    this.model = model;
  }

  async getAll(): Promise<ITreatment[]> {
    const result = await this.model.getAll();
    return result as ITreatment[];
  }

  async getById(id: number): Promise<ITreatment> {
    const result = await this.model.getById(id);
    return result as ITreatment;
  }
}
