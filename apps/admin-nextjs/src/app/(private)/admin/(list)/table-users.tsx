'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@sdks/uikit-react';
import { OnPageChange, Pagination } from '@sdks/nextjs';
import { useQuery } from '@sdks/api-react-query';
import { useMemo, useState } from 'react';
import { AdminSearchParams } from '@sdks/api-admin';

export function TableUsers() {
  const [searchParams, setSearchParams] = useState<AdminSearchParams>({
    page: 1,
    size: 10,
    order: [['id', 'DESC']],
  });

  const params = useMemo<[AdminSearchParams]>(() => [searchParams], [searchParams]);
  const { data, meta } = useQuery(client.admin.search, { params });

  const onPageChange: OnPageChange = (data) => {
    setSearchParams(params => ({ ...params, ...data }));
  };

  return (
    <div className='flex flex-col gap-4'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[80px]'>ID</TableHead>
            <TableHead className='w-[300px]'>Name</TableHead>
            <TableHead className='w-[300px]'>Created at</TableHead>
            <TableHead className='text-right'>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((admin) => (
            <TableRow key={admin.id}>
              <TableCell>{admin.id}</TableCell>
              <TableCell className='font-medium'>{admin.firstName} {admin.lastName}</TableCell>
              <TableCell>{admin.createdAt}</TableCell>
              <TableCell className='text-right'></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination
        onPageChange={onPageChange}
        page={searchParams.page!}
        size={searchParams.size}
        total={meta?.paging?.total}
      />
    </div>
  );
}
