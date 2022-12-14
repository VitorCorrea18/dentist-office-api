import { NextFunction, Request, Response } from 'express';
import { IInstallmentService } from '../protocols';

export default class InstallmentController {
  constructor(private service: IInstallmentService) {
    this.service = service;
  }

  async update(req: Request, res: Response, next: NextFunction) {
    const { installmentId } = req.params;
    try {
      await this.service.update(Number(installmentId));
      return res.status(200).end();
    } catch (err) {
      next(err);
    }
  }

}
