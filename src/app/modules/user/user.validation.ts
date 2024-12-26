import { z } from 'zod';


const userValidationSchema=z.object({
    name:z.string(),
    email:z.string().email(),
    password:z.string().max(20),
    role:z.enum(['user','admin']),
    isBlocked: z.boolean().default(false)
  

})

export const UserValidation={
    userValidationSchema
}