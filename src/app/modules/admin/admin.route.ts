import { Router } from 'express';
import { AdminControllers } from './admin.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from '../user/user.validation';

export const adminRouter = Router();

adminRouter.patch(
  '/users/:userId/block',
  auth(USER_ROLE.admin),
  validateRequest(UserValidation.updateUserValidationSchema),
  AdminControllers.updateBlockUserByAdmin,
);

adminRouter.delete(
  '/blogs/:id',
  auth(USER_ROLE.admin),
  AdminControllers.deleteBlogByAdmin,
);
