import { proxyTo } from '$share/express-proxy';
import { Express, Router } from 'express';

export function configRoutes(app: Express) {
  //===================================================================================================
  // /api/user
  const userRouter = Router();
  userRouter.post('/', proxyTo('User:UserRegisterCmd'));
  userRouter.post('/activate', proxyTo('User:UserActivateCmd'));


  app.use('/api/user', userRouter);
}
