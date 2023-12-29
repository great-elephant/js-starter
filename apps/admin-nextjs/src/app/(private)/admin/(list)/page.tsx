import { LayoutMain } from '@/widgets/layout-main';
import { PageTitle } from '@/widgets/page-title';
import { ButtonCreateAdm } from './button-create-adm';
import { TableUsers } from './table-users';

function UserList(): JSX.Element {
  return (
    <LayoutMain className='pb-4'>
      <div className='flex justify-between items-center'>
        <PageTitle>Admin</PageTitle>

        <ButtonCreateAdm />
      </div>

      <TableUsers />
    </LayoutMain>
  );
}

export default UserList;
