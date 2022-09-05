import { NextFunction, Request, Response } from 'express';
import { IPatientService } from '../protocols/';

export default class PatientController {
  constructor(private service: IPatientService) {
    this.service = service;
  }

  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.service.getAll();
      return res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { patient, installments } = req.body;
      const response = await this.service.create(patient, installments);
      return res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  }
}

