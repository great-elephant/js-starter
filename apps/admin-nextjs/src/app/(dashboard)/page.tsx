import { LayoutMain } from '@/widgets/layout-main';
import { Heading } from '@sdks/uikit-react';
import Link from 'next/link';
import { Content } from './content';

function Dashboard(): JSX.Element {
  return (
    <LayoutMain className='container'>
      <Heading className='py-4'>Dashboard</Heading>
      {/* <Link href={'/user'}>users</Link> |
      <Link href={'/user/tr5454hbf'}>detail</Link> */}
      <Content />
    </LayoutMain>
  );
}

export default Dashboard;
