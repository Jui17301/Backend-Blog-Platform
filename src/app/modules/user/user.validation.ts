import { z } from 'zod';

const userValidationSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().max(20),
  role: z.enum(['user', 'admin']).optional(),
  isBlocked: z.boolean().default(false),
});
const updateUserValidationSchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  password: z.string().max(20).optional(),
  role: z.enum(['user', 'admin']).optional(),
  isBlocked: z.boolean().default(false),
});

export const UserValidation = {
  userValidationSchema,
  updateUserValidationSchema,
};
