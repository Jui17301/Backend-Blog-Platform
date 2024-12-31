class AppError extends Error {
  public statusCode: number;
  public errorDetails;
  public stack?: string;

  constructor(
    statusCode: number,
    message: string,
    errorDetails = [],
    stack = '',
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errorDetails = errorDetails;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
  public getFormattedErrorResponse() {
    return {
      success: false,
      message: this.message,
      statusCode: this.statusCode,
      error: {
        details: this.errorDetails,
      },
      stack: this.stack || '',
    };
  }
}

export default AppError;
