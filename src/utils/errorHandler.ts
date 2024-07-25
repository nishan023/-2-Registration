import { Request, Response, NextFunction } from 'express';
import { AppError } from './appError';

export const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(err.statusCode || 500).json({
    status: err.status || 'error',
    message: err.message || 'Internal Server Error',
  });
};
