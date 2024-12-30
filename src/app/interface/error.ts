export type TErrorSources = {
  path: string | number;
  message: string;
}[];

export type TGenericErrorResponse = {
  errorDetails: TErrorSources;
  success: boolean;
  statusCode: number;
  message: string;
  error: {
    details: TErrorSources;
  };
  stack?: string;
};
