import { StatusCodes } from 'http-status-codes';
/* eslint-disable prettier/prettier */
 
/* eslint-disable prettier/prettier */
import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";


const register=catchAsync(async(req:Request,res:Response)=>{
const result =await AuthService.registerUser(req.body)
// const{password,...data}=result;
sendResponse(res,{
    success:true,
   message:'User registered successfully',
   statusCode:StatusCodes.CREATED,

   data:{
   _id:result._id,
   name:result.name,
   email:result.email
}
})
})

const login=catchAsync(async(req:Request,res:Response)=>{
    const result =await AuthService.loginUser(req.body)
    sendResponse(res,{
       success:true,
       message:'login successful',
       statusCode:StatusCodes.OK,
      data:{
        token:result.accessToken,
      }
       
    //    data: result.verifiedUser
    //    data:{
    //    name:result.name
    // }
    })
    })
    

export const AuthController={
    register,
    login
}
