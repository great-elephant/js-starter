import { FindOperator, Repository, SelectQueryBuilder } from 'typeorm';
import { Success, SuccessData, Unprocessable } from '$share/msg';
import { Aql } from '@sdks/types-shared';

interface SearchConfig {
  publicFields: string[];
  searchableFields: string[];
}

export async function paginate<T>(repo: Repository<T>, search: Aql, config: SearchConfig) {
  const qb = buildQueryBuilder(repo, search, config);

  const [data, total] = await qb.getManyAndCount();

  return Success({
    data,
    meta: {
      paging: { total },
    },
  });
}

export async function paginateWithoutCount<T>(repo: Repository<T>, search: Aql, config: SearchConfig) {
  const qb = buildQueryBuilder(repo, search, config);

  const data = await qb.getMany();

  return SuccessData(data);
}

function buildQueryBuilder<T>(repo: Repository<T>, search: Aql, config: SearchConfig) {
  const qb = repo.createQueryBuilder('E');

  if (search.select?.length) qb.select((search.select).map(field => `E.${field}`));
  else if (config?.publicFields) qb.select(config.publicFields.map(field => `E.${field}`));

  search.where && buildWhereClause(search.where, qb, config);

  const limit = Math.min(search?.size || 10, 100);
  qb.limit(limit);
  qb.offset(((search?.page || 1) - 1) * limit);

  search.order?.forEach(([name, order]) => {
    qb.addOrderBy(`E.${name}`, order);
  });

  return qb;
}

function buildWhereClause(where, qb: SelectQueryBuilder<unknown>, config: SearchConfig) {
  const whereAsArr = Object.keys(where);

  if (whereAsArr.length > 8) {
    throw Unprocessable({ msg: 'Maximum 8 conditions' });
  }

  whereAsArr.forEach((field, idx) => {
    const value = where[field];

    if (!config.searchableFields.includes(field)) {
      throw Unprocessable({ msg: `${field} is not a searchable field` });
    }

    if (typeof value !== 'object') {
      return qb.andWhere(`E.${field} = :eq_${field}_${idx}`, { [`eq_${field}_${idx}`]: value });
    }

    const isFindOp = value instanceof FindOperator;
    if (isFindOp) {
      const findOp = findOperatorMapping[value.type];
      if (!findOp) throw Unprocessable({ msg: `"${value.type}" is not supported` });
      return findOp(qb, field, idx, value);
    }

    return Object
      .keys(value)
      .forEach(key => {
        const opFunc = aqlOperatorMapping[key];

        if (!opFunc) {
          throw Unprocessable({ msg: `There is no supported for "${key}"` });
        }

        opFunc(qb, field, idx, value[key]);
      });
  });
}

const findOperatorMapping: { [k in any]: (qb: SelectQueryBuilder<unknown>, field: string, idx: number, find: FindOperator<any>) => any } = {
  isNull: (qb, field) => qb.andWhere(`E.${field} IS NULL`),
};

const aqlOperatorMapping: { [k: string]: (qb: SelectQueryBuilder<unknown>, field: string, idx: number, value: string | string[]) => any } = {
  $in: (qb, field, idx, value: string[]) => {
    if (value.length > 1000) {
      throw Unprocessable({ msg: 'Maximum 1000 values inside "$in"' });
    }

    const key = `in_${field}_${idx}`;

    qb.andWhere(`E.${field} IN (:...${key})`, { [key]: value });
  },
  $ne: (qb, field, idx, value) => qb.andWhere(`E.${field} != :ne_${field}_${idx}`, { [`ne_${field}_${idx}`]: value }),
  $lte: (qb, field, idx, value) => qb.andWhere(`E.${field} <= :lte_${field}_${idx}`, { [`lte_${field}_${idx}`]: value }),
  $lt: (qb, field, idx, value) => qb.andWhere(`E.${field} < :lt_${field}_${idx}`, { [`lt_${field}_${idx}`]: value }),
  $gt: (qb, field, idx, value) => qb.andWhere(`E.${field} > :gt_${field}_${idx}`, { [`gt_${field}_${idx}`]: value }),
  $gte: (qb, field, idx, value) => qb.andWhere(`E.${field} >= :gte_${field}_${idx}`, { [`gte_${field}_${idx}`]: value }),
};
