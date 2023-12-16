import { IRS } from '@cellularjs/net';
import { ErrorItem, ErrorResponse } from '@sdks/types-shared';

export function Success<D>(body: { data: D; meta: any }) {
  return new IRS({ status: 200 }, body);
}

export function SuccessData<D>(data: D) {
  return new IRS({ status: 200 }, { data });
}

export function Redirect(location: string) {
  return new IRS({ status: 302, location });
}

export function BadRequest(body: Omit<ErrorResponse, 'err'> = {}) {
  return new IRS({ status: 400 }, { err: 'BAD_REQUEST', ...body });
}

export function UnAuthorized(body: Omit<ErrorResponse, 'err'> = {}) {
  return new IRS({ status: 401 }, { err: 'UNAUTHORIZED', ...body });
}

export function Forbidden(body: Omit<ErrorResponse, 'err'> = {}) {
  return new IRS({ status: 403 }, { err: 'FORBIDDEN', ...body });
}

export function NotFound(body: Omit<ErrorResponse, 'err'> = {}) {
  return new IRS({ status: 404 }, { err: 'NOT_FOUND', ...body });
}

export function Unprocessable(body: Omit<ErrorResponse, 'err'> = {}) {
  return new IRS({ status: 422 }, { err: 'UNPROCESSABLE', ...body });
}

export function UnprocessableErrors(errors: ErrorItem[]) {
  return new IRS({ status: 422 }, { err: 'UNPROCESSABLE', errors });
}

export function UnprocessableError(error: ErrorItem) {
  return new IRS({ status: 422 }, { err: 'UNPROCESSABLE', errors: [error] });
}

export function InternalError(body: Omit<ErrorResponse, 'err'> = {}) {
  return new IRS({ status: 500 }, { err: 'INTERNAL_ERROR', ...body });
}
