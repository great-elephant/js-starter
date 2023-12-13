import { Express, Router } from 'express';

export function configRoutes(app: Express) {
  //===================================================================================================
  // /api/user
  const userRouter = Router();

  app.use('/api/user', userRouter);
}
