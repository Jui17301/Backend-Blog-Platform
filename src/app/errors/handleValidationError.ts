/* eslint-disable prettier/prettier */
import mongoose from 'mongoose';
import { TErrorSources, TGenericErrorResponse } from '../interface/error';

const handleValidationError = (
  err: mongoose.Error.ValidationError,
): TGenericErrorResponse => {
  const details: TErrorSources = Object.values(err.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: val?.path,
        message: val?.message,
      };
    },
  );


  return {
    success: false,
    message: 'Validation Error',
    statusCode:400,
    error: {
      details,
    },
    errorDetails: details,
    stack: err.stack,
  };
};

export default handleValidationError;
