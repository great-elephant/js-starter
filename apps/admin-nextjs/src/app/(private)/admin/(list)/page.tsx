import { LayoutMain } from '@/widgets/layout-main';
import { TitlePage } from '@/widgets/title-page';
import { ButtonCreateAdm } from './button-create-adm';
import { TableUsers } from './table-users';

function UserList(): JSX.Element {
  return (
    <LayoutMain>
      <div className='flex justify-between items-center'>
        <TitlePage>Admin</TitlePage>

        <ButtonCreateAdm />
      </div>

      <TableUsers />
    </LayoutMain>
  );
}

export default UserList;
