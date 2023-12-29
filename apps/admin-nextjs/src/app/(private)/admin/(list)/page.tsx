'use client';

import { Guard } from '@/misc/session';
import { LayoutMain } from '@/widgets/layout-main';
import { ModalCreateAdmin } from '@/widgets/modal-create-admin';
import { PageTitle } from '@/widgets/page-title';
import { Button, openModal } from '@sdks/uikit-react';
import { AdminRole } from '@sdks/types-admin';
import { Plus } from 'lucide-react';
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
import { AdminSearchParams } from '@sdks/api-admin/src/callers/admin';

export function TableDemo() {
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

function UserList(): JSX.Element {
  return (
    <LayoutMain className='pb-4'>
      <div className='flex justify-between items-center'>
        <PageTitle>Admin</PageTitle>

        <Guard role={AdminRole.SUPER_ADMIN}>
          <Button onClick={() => openModal(ModalCreateAdmin)}><Plus width={16} /> Create admin</Button>
        </Guard>
      </div>

      <TableDemo />
    </LayoutMain>
  );
}

export default UserList;
