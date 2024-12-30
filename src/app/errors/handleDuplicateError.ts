import mongoose from 'mongoose';
import { TErrorSources, TGenericErrorResponse } from '../interface/error';

const handleCastError = (
  err: mongoose.Error.CastError,
): TGenericErrorResponse => {
  const errorSources: TErrorSources = [
    {
      path: err.path,
      message: err.message,
    },
  ];

  const statusCode = 400;

  return {
    success: false,
    message: 'Duplicate Entry',
    statusCode,
    error: {
      details: errorSources,
    },
    errorDetails: errorSources, 
    stack: err.stack,
  };
};

export default handleCastError;
