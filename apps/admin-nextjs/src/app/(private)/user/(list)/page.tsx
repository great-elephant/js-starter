import { LayoutMain } from '@/widgets/layout-main';
import { TitlePage } from '@/widgets/title-page';
import { TableUsers } from './table-users';

function UserList(): JSX.Element {
  return (
    <LayoutMain>
      <div className='flex justify-between items-center'>
        <TitlePage>User</TitlePage>
      </div>

      <TableUsers />
    </LayoutMain>
  );
}

export default UserList;
