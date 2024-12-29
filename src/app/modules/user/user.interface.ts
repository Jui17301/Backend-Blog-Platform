import { Model, Types } from "mongoose";
import { USER_ROLE } from "./user.constant";

export interface TUser{
    _id: Types.ObjectId ;
    name:string;
    email:string;
    password:string;
    role:'admin'|'user';
    isBlocked?:boolean;
}
export interface UserModel extends Model<TUser>{

  isUserExists(email:string):Promise<TUser>

  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;


}
export type TUserRole = keyof typeof USER_ROLE;
