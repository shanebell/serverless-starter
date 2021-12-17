import { NextFunction, Request, RequestHandler, Response } from "express";

const logRequest = (): RequestHandler => (req: Request, res: Response, next: NextFunction) => {
  console.info(`${req.method} ${req.url}`);
  next();
};

const handleAsync =
  (handlerFn: (req: Request, res: Response, next?: NextFunction) => Promise<any>) =>
  (req: Request, res: Response, next: NextFunction) =>
    handlerFn(req, res, next)
      .then(() => next())
      .catch((error: any) => next(error));

export { logRequest, handleAsync };
