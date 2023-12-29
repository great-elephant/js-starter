import { ErrorItem } from '@sdks/types-shared';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { Injectable, addProxy, ProxyContext } from '@cellularjs/di';
import { IRQ } from '@cellularjs/net';
import { Unprocessable } from '$share/msg';

type DataGetter = (irq: IRQ) => any;

type ValidateMeta = {
  onError?: (errorData: { errors: ErrorItem[] }) => void;
  dataGetter?: DataGetter;
}

export const Validate = (meta?: ValidateMeta) => (aClass) => {
  addProxy(aClass, { proxy: ValidateReqProxy, meta });

  Injectable()(aClass);

  return aClass;
};

@Injectable()
class ValidateReqProxy {
  constructor(
    private irq: IRQ,
    private ctx: ProxyContext<ValidateMeta>,
  ) { }

  async handle() {
    const { irq, ctx } = this;
    const data = ctx.meta?.dataGetter ? ctx.meta.dataGetter(irq) : irq.body;
    const dto = plainToInstance(ctx.token, data);
    const errs = await validate(dto);

    if (!errs.length) {
      return dto;
    }

    const errors: ErrorItem[] = genError(errs);

    if (!ctx.meta?.onError) {
      throw Unprocessable({ errors });
    }

    return ctx.meta.onError({ errors });
  }
}

function genError(errs: any[]) {
  const errors = [];
  genError2(errs, (err) => errors.push(err));

  return errors;
}

function genError2(errs: any[], onFound: (errs: any) => any, root = '') {
  errs.map(err => {
    const errKey = err.constraints && Object.keys(err.constraints)?.[0];

    if (!err.constraints?.[errKey]) {
      genError2(err.children, onFound, err.property + '.');
      return;
    }

    onFound({
      src: root + err.property,
      err: errKey,
      msg: err.constraints[errKey],
    });
  });
}