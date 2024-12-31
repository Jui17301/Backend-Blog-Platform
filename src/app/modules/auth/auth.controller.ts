import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

const register = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.registerUser(req.body);

  sendResponse(res, {
    success: true,
    message: 'User registered successfully',
    statusCode: StatusCodes.CREATED,

    data: {
      _id: result._id,
      name: result.name,
      email: result.email,
    },
  });
});

const login = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.loginUser(req.body);
  // console.log(result)
  sendResponse(res, {
    success: true,
    message: 'login successful',
    statusCode: StatusCodes.OK,
    data: {
      token: result.data.token,
    },
  });
});

export const AuthController = {
  register,
  login,
};
