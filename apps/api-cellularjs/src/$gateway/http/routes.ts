import { proxyTo } from '$share/express-proxy';
import { Express, Router } from 'express';

export function configRoutes(app: Express) {
  //===================================================================================================
  // /api/user
  const userRouter = Router();
  userRouter.post('/', proxyTo('User:UserRegisterCmd'));
  userRouter.post('/activate', proxyTo('User:UserActivateCmd'));
  userRouter.post('/login', proxyTo('User:UserLoginQry'));
  userRouter.get('/my-info', proxyTo('User:UserMyInfoQry'));

  app.use('/api/user', userRouter);
}
