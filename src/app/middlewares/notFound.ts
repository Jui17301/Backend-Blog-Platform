/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextFunction, Request, Response } from 'express';
import httpStatus, { StatusCodes } from 'http-status-codes';

const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    statusCode: StatusCodes.NOT_FOUND,
    message: 'API Not Found',
    error: {
      details: 'The requested resource could not be found.',
    },
    stack: '',
  });
};

export default notFound;
