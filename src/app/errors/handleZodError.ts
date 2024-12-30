import { ZodError, ZodIssue } from 'zod';
import { TErrorSources, TGenericErrorResponse } from '../interface/error';

const handleZodError = (err: ZodError): TGenericErrorResponse => {
  const details: TErrorSources = err.issues.map((issue: ZodIssue) => ({
    
      path: issue?.path[issue.path.length - 1],
      message: issue.message,
   
  }));

  const statusCode = 400;

  return {
    success: false,
    message: 'Zod Validation Error',
    statusCode,
    errorDetails: details,
    error: {
      details,
    },
    stack: err.stack,
  };

  };


export default handleZodError;
