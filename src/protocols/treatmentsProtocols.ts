export interface ITreatment {
  id?: number,
  name: string,
  price: string
}

export interface ITreatmentModel {
  getAll(): Promise<ITreatment[]>
  getById(id: number): Promise<ITreatment>
}

export interface ITreatmentService {
  getAll(): Promise<ITreatment[]>
  getById(id: number): Promise<ITreatment>
}
