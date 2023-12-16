import { TransactionalCatch, setDefaultCatch } from '@cellularjs/typeorm';

const MAX_RETRY = 1;

/**
 * Ref: https://www.postgresql.org/docs/current/mvcc-serialization-failure-handling.html
 */
const retryableCodes = [
  '40001', // serialization_failure
  '40P01', // deadlock_detected
  '23505', // unique_violation
  '23P01', // exclusion_violation
];

const txCatch: TransactionalCatch = async ({ error, service, ctx }) => {
  if (!retryableCodes.includes(error?.code)) throw error;

  ctx.try ||= 0;
  ctx.try++;

  if (ctx.try > MAX_RETRY) throw error;

  return await service.handle();
};

setDefaultCatch(txCatch);