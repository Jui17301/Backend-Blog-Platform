import httpStatus  from 'http-status-codes';
import { TUser } from "../user/user.interface";
import { TLoginUser } from "./auth.interface";
import config from '../../config';
import AppError from '../../errors/AppError';
import { createToken } from './auth.utils';
import { User } from "../user/user.model";


const registerUser=async(payload:TUser)=>{
    const result = await User.create(payload);
    return result
}

const loginUser=async(payload:TLoginUser)=>{

    // console.log(payload.email)
    const user = await User.isUserExists(payload?.email);

    if(!user){
        throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
       }
       if (!(await User.isPasswordMatched(payload?.password, user?.password)))
        throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');

       //  create Token
       // step-1
  const jwtPayload = {
    email: user.email,
    role: user.role,
  };
// step-2
  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );
   
    
        return {
            accessToken
        }
    }
    
    export const AuthService={
        registerUser,
        loginUser
    }
