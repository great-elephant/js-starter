import { createAqlClass } from '$share/aql';
import { Aql } from '@sdks/types-shared';

export const publicFields = [
  'id',
  'avatar',
  'firstName',
  'lastName',
  'createdAt',
];

export const searchableFields = [
  'id',
];

export class WhereClause {
}

export type UserSearchReq = Aql<WhereClause>;

export const UserSearchReq = createAqlClass(publicFields);