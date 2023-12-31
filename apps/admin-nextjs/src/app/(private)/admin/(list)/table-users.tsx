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

export function TableUsers() {
  const { data, meta, params, setParams } = useQuery(client.admin.search, {
    params: [{
      page: 1,
      size: 10,
      order: [['id', 'DESC']],
    }],
  });
  
  const onPageChange: OnPageChange = (data) => setParams(params => [{
    ...params?.[0],
    ...data,
  }]);

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
        page={params?.[0].page}
        size={params?.[0].size}
        total={meta?.paging?.total}
      />
    </div>
  );
}
