import { LayoutMain } from '@/widgets/layout-main';
import { PageTitle } from '@/widgets/page-title';
import Link from 'next/link';

function UserList(): JSX.Element {
  return (
    <LayoutMain>
      <PageTitle>Disable user</PageTitle>
      list
      <Link href={'/user'}>users</Link> | 
      <Link href={'/user/tr5454hbf'}>detail</Link>
    </LayoutMain>
  );
}

export default UserList;
