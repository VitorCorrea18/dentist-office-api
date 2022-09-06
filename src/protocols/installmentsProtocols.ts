export interface IInstallment {
  id?: number,
  date: string,
  status: string,
  patientId?: number
}

export interface IInstallmentModel {
  create(data: object): Promise<IInstallment>
  update(payload: object, data: object): Promise<void>
}

export interface IInstallmentService {
  update(id: number): Promise<void>
}

