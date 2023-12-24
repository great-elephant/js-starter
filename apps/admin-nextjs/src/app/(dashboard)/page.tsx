import { LayoutMain } from '@/widgets/layout-main';
import { Heading } from '@sdks/uikit-react';
import Link from 'next/link';

function Dashboard(): JSX.Element {
  return (
    <LayoutMain className='container'>
      <Heading className='py-4'>Dashboard</Heading>
      <Link href={'/user'}>users</Link> | 
      <Link href={'/user/tr5454hbf'}>detail</Link>
    </LayoutMain>
  );
}

export default Dashboard;
