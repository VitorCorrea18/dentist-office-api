import { NextFunction, Request, Response } from 'express';
import { IPatient } from '../protocols';
import { patientSchema } from '../schemas';

export default class Validation {
  // Joi validations and token decryption

  // SCHEMAS
  schema;

  constructor() {
    this.schema = patientSchema;
  }

  public patient = async (req: Request, _res: Response, next: NextFunction) => {
    const patient: IPatient = req.body;
    const { error } = this.schema.validate(patient);
    if (error) {
      next({ status: 404, message: error.message });
    }
    next();
  };
}
