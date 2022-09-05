export interface IInstallment {
  id?: number,
  date: string,
  status: string,
  patientId?: number
}

export interface IInstallmentModel {
  create(data: object): Promise<void>
  update(payload: object, data: object): Promise<void>
}

