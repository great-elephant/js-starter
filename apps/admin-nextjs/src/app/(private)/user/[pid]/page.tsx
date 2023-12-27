import { LayoutMain } from '@/widgets/layout-main';
import Link from 'next/link';

function UserDetail(): JSX.Element {
  return (
    <LayoutMain>
      detail
      <Link href={'/user'}>users</Link> | 
      <Link href={'/user/tr5454hbf'}>detail</Link>
    </LayoutMain>
  );
}

export default UserDetail;
