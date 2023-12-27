'use client';

import { useSession, Guard } from '@/misc/session';
import { LayoutMain } from '@/widgets/layout-main';
import { ModalCreateAdmin } from '@/widgets/modal-create-admin';
import { PageTitle } from '@/widgets/page-title';
import { Button } from '@uikit-react/button';
import { openModal } from '@uikit-react/overlay';
import { AdminRole } from '@sdks/types-admin';
import { Plus } from 'lucide-react';

function UserList(): JSX.Element {
  const { user } = useSession();

  return (
    <LayoutMain>
      <div className='flex justify-between items-center'>
        <PageTitle>Admin</PageTitle>

        <Guard role={AdminRole.SUPER_ADMIN}>
          <Button onClick={() => openModal(ModalCreateAdmin)}><Plus width={16} /> Create admin</Button>
        </Guard>
      </div>
    </LayoutMain>
  );
}

export default UserList;
