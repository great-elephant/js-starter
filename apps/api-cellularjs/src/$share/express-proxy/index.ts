import { IRQ, ToTargetHeader, send } from '@cellularjs/net';
import {
  expressProxy,
  InputTransform,
  OutputTransform,
} from '@cellularjs/express-proxy';
import { getLogger } from '@cellularjs/logger';
import multer from 'multer';
import { NextFunction, Request } from 'express';

const KEY_ACCESS_TOKEN = 'jwt';

const upload = multer();

const inputTransform: InputTransform = (req, proxyTo) => {
  const logger = getLogger('ExpressProxy');

  const bearerStr =
    req.headers.authorization ||
    (req.cookies[KEY_ACCESS_TOKEN]
      ? `Bearer ${req.cookies[KEY_ACCESS_TOKEN]}`
      : undefined);
  const irq = new IRQ(
    { to: proxyTo, authorization: bearerStr, lang: req.headers.lang },
    { ...req.query, ...req.params, ...req.body },
  );

  logger.info(`${req.method} ${req.baseUrl + req.path} => ${proxyTo}`);
  logger.debug('received', { irq });

  return irq;
};

const outputTransform: OutputTransform = (expressCtx, cellularCtx) => {
  const { res } = expressCtx;
  const { irs } = cellularCtx;

  if (irs.header.status === 302) {
    res.redirect(irs.header.location);
    return;
  }

  res.status(irs.header?.status || 500).json(irs.body);
};

export const proxyTo = (
  proxyTo: ToTargetHeader,
  subProxy?: {
    inputTransform?: InputTransform;
    outputTransform?: OutputTransform;
  },
) =>
  expressProxy(
    { inputTransform, outputTransform },
    {
      send: (irq) => send(irq),
    },
  )(proxyTo, subProxy);

export const multerSingleProxyTo = (
  inputFile: string,
  to: ToTargetHeader,
  subProxy?: any,
) => [
  upload.single(inputFile),
  (req: Request, _, next: NextFunction) => {
    req.body[inputFile] = req.file;
    next();
  },
  proxyTo(to, subProxy),
];
