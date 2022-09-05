import { IInstallment } from ".";

export interface IPatient {
  id?: number,
  name: string,
  treatmentId?: number,
  treatment?: string,
  installments?: [IInstallment]
}

export interface IDate {
  month: string,
  year: string
}

export interface IData {
  where?: {},
  include?: [{}] | {}
}


export interface IPatientModel {
  getAll(data: IData): Promise<IPatient[]>
  create(patient: IPatient): Promise<IPatient>
}

export interface IPatientService {
  getAll(): Promise<IPatient[]>
  create(patient: IPatient, installments: number): Promise<IPatient>
}

