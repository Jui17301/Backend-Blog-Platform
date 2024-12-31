import httpStatus, { StatusCodes } from 'http-status-codes';
import { TUser } from '../user/user.interface';
import { TLoginUser } from './auth.interface';
import config from '../../config';
import AppError from '../../errors/AppError';
import { createToken } from './auth.utils';
import { User } from '../user/user.model';

const registerUser = async (payload: TUser) => {
  const existingUser = await User.findOne({ email: payload.email });
  if (existingUser) {
    throw new AppError(StatusCodes.CONFLICT, 'User already exists');
  }
  const result = await User.create(payload);
  return {
    _id: result._id,
    name: result.name,
    email: result.email,
  };
};
const loginUser = async (payload: TLoginUser) => {
  // console.log(payload.email)
  const user = await User.isUserExists(payload?.email);

  if (!user) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'This user is not found !');
  }
  if (!(await User.isPasswordMatched(payload?.password, user?.password))) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid credentials');
  }
  //  create Token
  // step-1
  const jwtPayload = {
    id: user._id?.toString(),
    email: user.email,
    role: user.role,
  };
  // console.log(jwtPayload)
  // step-2
  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  return {
    data: {
      token: accessToken,
    },
  };
};

export const AuthService = {
  registerUser,
  loginUser,
};
