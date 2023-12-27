import { ErrorResponse } from '@sdks/types-shared';
import { UseFormReturn } from 'react-hook-form';

export function populateError(error: ErrorResponse, form: UseFormReturn) {
  if (!error.errors) return;

  error.errors.forEach(err => {
    form.setError(err.src, { message: err.msg });
  });
}