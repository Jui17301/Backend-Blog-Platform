import { Router } from 'express';
// import { blogRoutes } from '../modules/blog/blog.route';
import { authRouter } from '../modules/auth/auth.route';
import { blogRoutes } from '../modules/blog/blog.route';
const router = Router();

const moduleRoutes: any[] = [
    {
      path: '/blogs',
      route: blogRoutes,
    },
    {
      path: '/auth',
      route: authRouter,
    },
    // {
    //   path: '/admin',
    //   route: adminRoutes,
    // },

];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
