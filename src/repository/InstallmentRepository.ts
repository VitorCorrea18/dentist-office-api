import InstallmentModel from '../database/models/installmentModel';
import { IInstallment, IInstallmentModel } from '../protocols';

export default class InstallmentRepository implements IInstallmentModel {
  constructor(private model = InstallmentModel) {
    this.model = model;
  }

  async create(data: object): Promise<void> {
    await this.model.create({ ...data });
  }

  async update(payload: object, data: { where: {} }): Promise<void> {
    await this.model.update(payload, data);
  }
}
