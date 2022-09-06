import { IPatient, IPatientService, IPatientModel, IInstallmentModel, ITreatmentModel } from '../protocols';
// import PatientModel from '../database/models/patientModel';
import TreatmentModel from '../database/models/treatmentModel';
import InstallmentModel from '../database/models/installmentModel';

export default class PatientServices implements IPatientService {
  constructor(private patientModel: IPatientModel, private installmentModel: IInstallmentModel) {
    this.patientModel = patientModel;
    this.installmentModel = installmentModel;
  }

  async getAll(): Promise<IPatient[]> {
    const result = await this.patientModel.getAll({
      include: [
        {
          model: TreatmentModel,
          as: 'treatment',
          attributes: { exclude: ['id'] }
        },
        {
          model: InstallmentModel,
          as: 'installments',
          attributes: { exclude: ['patientId'] }
        },
      ]
    });

    return result as IPatient[];
  }

  async create(patient: IPatient, installments: number): Promise<IPatient> {
    const newPatient = await this.patientModel.create(patient);
    const newInstallments = await this.createInstallments(installments, newPatient.id);

    const result = { ...newPatient.dataValues, installments: newInstallments };
    return result as IPatient;
  }

  async createInstallments(installments: number, patientId: number | undefined) {
    let d = new Date();
    const startDate = (d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + (d.getDate())).slice(-2));
    const installmentsArray: [string] = [startDate];

    // https://stackoverflow.com/questions/65509371/add-1-month-to-current-date-in-javascript-can-you-please-integrate-your-solutio
    for (let i = 1; i <= installments; i += 1) {
      d = new Date(d.setMonth(d.getMonth() + 1));
      const nextDate = (d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + (d.getDate())).slice(-2));
      installmentsArray.push(nextDate);
    }
    const result = Promise.all(installmentsArray.map(async (d) => {
      return await this.installmentModel.create({ date: d, status: 'Pendente', patientId });
    }))
    return result;
  }

  async getById(id: number): Promise<IPatient> {
    const result = await this.patientModel.getById({
      where: { id },
      include: [
        {
          model: TreatmentModel,
          as: 'treatment',
          attributes: { exclude: ['id'] }
        },
        {
          model: InstallmentModel,
          as: 'installments',
          attributes: { exclude: ['patientId'] }
        },
      ]
    });
    return result as IPatient;
  }

}
