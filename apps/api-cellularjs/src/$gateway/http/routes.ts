import { proxyTo } from '$share/express-proxy';
import { Express, Router } from 'express';

export function configRoutes(app: Express) {
  //===================================================================================================
  // /api/admin
  const adminRouter = Router();
  adminRouter.post('/', proxyTo('Admin:AdminCreateCmd'));
  adminRouter.post('/search', proxyTo('Admin:AdminSearchQry'));
  adminRouter.post('/login', proxyTo('Admin:AdminLoginQry'));
  adminRouter.get('/my-info', proxyTo('Admin:AdminMyInfoQry'));
  
  app.use('/api/admin', adminRouter);

  //===================================================================================================
  // /api/user
  const userRouter = Router();
  userRouter.post('/', proxyTo('User:UserRegisterCmd'));
  userRouter.post('/activate', proxyTo('User:UserActivateCmd'));
  userRouter.post('/login', proxyTo('User:UserLoginQry'));
  userRouter.get('/my-info', proxyTo('User:UserMyInfoQry'));

  app.use('/api/user', userRouter);
}
