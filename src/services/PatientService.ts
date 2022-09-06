import { IPatient, IPatientService, IPatientModel, IInstallmentModel } from '../protocols';
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
    const d = new Date();
    const dataFormatada = ((d.getDate())) + "/" + ((d.getMonth() + 1)) + "/" + d.getFullYear();
    console.log(dataFormatada, installments);
    return newPatient as IPatient;
  }
}
