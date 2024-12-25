import  bcrypt  from 'bcrypt';
import { boolean } from 'zod';
import { model, Schema } from "mongoose";
import { TUser} from "./user.interface";
import config from '../../config';
// import validator from 'validator';



  const userSchema=new Schema<TUser>(
    {
        name:{
            type:String,
            required:true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // validate: {
            //   validator: (value: string) => validator.isEmail(value),
            //   message: '{VALUE} is not a email type',
            // },
          },
        password:{
            type:String,
            required:true,
            select:0
        },
        role:{
            type:String,
            enum:['admin','user'],
            default:'user'
        },
        isBlocked: {
            type: Boolean,
            // enum: ['active', 'blocked'],
            default: false,
          },
    },{
        timestamps:true,
    }
  )

  
// password hash : work before going service
userSchema.pre('save',async function(next){
    const user =this;

    user.password=await bcrypt.hash(user.password,Number(config.bcrypt_salt_rounds))
    
    next();
})
// doc is comes from service thats why doc is used
userSchema.post('save',function(doc,next){
    doc.password="";
    next()
})

const User = model<TUser>('User',userSchema)

export default User