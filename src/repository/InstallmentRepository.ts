import InstallmentModel from '../database/models/installmentModel';
import { IInstallment, IInstallmentModel } from '../protocols';

export default class InstallmentRepository implements IInstallmentModel {
  constructor(private model = InstallmentModel) {
    this.model = model;
  }

  async create(data: object): Promise<IInstallment> {
    const result = await this.model.create({ ...data });
    return result as unknown as IInstallment;
  }

  async update(payload: object, data: { where: {} }): Promise<void> {
    await this.model.update(payload, data);
  }
}
