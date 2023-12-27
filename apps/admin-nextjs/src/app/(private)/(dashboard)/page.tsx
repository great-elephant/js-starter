import { LayoutMain } from '@/widgets/layout-main';
import { Heading } from '@sdks/uikit-react';
import Link from 'next/link';
import { Content } from './content';
import { PageTitle } from '@/widgets/page-title';

function Dashboard(): JSX.Element {
  return (
    <LayoutMain className='container'>
      <PageTitle>Dashboard</PageTitle>
      {/* <Link href={'/user'}>users</Link> |
      <Link href={'/user/tr5454hbf'}>detail</Link> */}
      <Content />
    </LayoutMain>
  );
}

export default Dashboard;
