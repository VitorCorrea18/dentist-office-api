
// errorHandler to use in app listener
import { Request, Response, NextFunction } from 'express';
import { IError } from '../protocols';

const errorHandler = (error: IError, _req: Request, res: Response, _next: NextFunction) => {
  if (error.status) {
    return res.status(error.status).json({ message: error.message });
  }
  return res.status(500).json('Internal Server Error');
};

export default errorHandler;
