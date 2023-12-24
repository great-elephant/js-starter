import { LayoutMain } from '@/widgets/layout-main';
import Link from 'next/link';

function UserList(): JSX.Element {
  return (
    <LayoutMain>
      list
      <Link href={'/user'}>users</Link> | 
      <Link href={'/user/tr5454hbf'}>detail</Link>
    </LayoutMain>
  );
}

export default UserList;
