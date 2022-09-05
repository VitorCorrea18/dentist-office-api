import { IInstallment } from ".";

export interface IPatient {
  id?: number,
  name: string,
  treatmentId?: number,
  treatment?: string,
  installments?: [IInstallment]
}

export interface IPatientModel {
  getByDate(data: object): Promise<IPatient[]>
  create(data: object): Promise<IPatient>
}

export interface IPatientService {
  findByDate(data: object): Promise<IPatient[]>
  create(data: object): Promise<IPatient>
}
