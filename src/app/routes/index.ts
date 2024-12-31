import { Router } from 'express';
// import { blogRoutes } from '../modules/blog/blog.route';
import { authRouter } from '../modules/auth/auth.route';
import { blogRoutes } from '../modules/blog/blog.route';
import { adminRouter } from '../modules/admin/admin.route';
const router = Router();

const moduleRoutes = [
  {
    path: '/blogs',
    route: blogRoutes,
  },
  {
    path: '/auth',
    route: authRouter,
  },
  {
    path: '/admin',
    route: adminRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
