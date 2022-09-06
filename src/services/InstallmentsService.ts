import { IInstallment, IInstallmentModel, IInstallmentService } from "../protocols";

export default class InstallmentService implements IInstallmentService {
  constructor(private model: IInstallmentModel) {
    this.model = model;
  }

  async update(id: number): Promise<void> {
    await this.model.update({ status: 'Pago' }, {
      where: { id }
    })
  }

}
