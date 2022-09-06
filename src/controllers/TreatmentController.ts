import { NextFunction, Request, Response } from 'express';
import { ITreatmentService } from '../protocols';

export default class TreatmentController {
  constructor(private service: ITreatmentService) {
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

  async getById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.body;
    try {
      const response = await this.service.getById(id)
    } catch (err) {
      next(err);
    }
  }
}
