import express from 'express'
import validateRequest from '../../middlewares/validateRequest';
import { BlogValidations } from './blog.validation';
import { USER_ROLE } from '../user/user.constant';
import auth from '../../middlewares/auth';
import { BlogControllers } from './blog.controller';

const router=express.Router();

router.post('/',
    auth(USER_ROLE.user),
    validateRequest(BlogValidations.createBlogValidationSchema),
    
    BlogControllers.createBlog)

router.patch("/:id",
    auth(USER_ROLE.user),
    validateRequest(BlogValidations.updateBlogValidationSchema),
    BlogControllers.updateBlog);

router.delete("/:id",
    auth(USER_ROLE.user),
    BlogControllers.deleteBlog);

router.get('/', 
    auth(USER_ROLE.user,USER_ROLE.admin),
    BlogControllers.getAllBlogs);


  
  export const blogRoutes = router;



