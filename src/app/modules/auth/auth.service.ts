import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { TUser } from "../user/user.interface";
import User from "../user/user.model";
import { TLoginUser } from "./auth.interface";


const registerUser=async(payload:TUser)=>{
    const result = await User.create(payload);
    return result
}

const loginUser=async(payload:TLoginUser)=>{

    const user=await User.findOne({
        email:payload?.email
    }).select('+password')

    if(!user){
        throw new Error('User Not found!!')
       }
       const isPasswordMatch=await bcrypt.compare(payload?.password,user?.password)
    
       if(!isPasswordMatch){
        throw new Error('Password is not matched!!!')
       }
        const token=jwt.sign(
            {email:user?.email,role:user?.role},
            'secret',
            {expiresIn:'10d'}
        )
    
        const verifiedUser = {
            email:user?.email,
            role:user?.role
        }
    
        return {token,verifiedUser}
    }
    
    export const AuthService={
        registerUser,
        loginUser
    }
