import { LayoutMain } from '@/widgets/layout-main';
import { Content } from './content';
import { TitlePage } from '@/widgets/title-page';

function Dashboard(): JSX.Element {
  return (
    <LayoutMain>
      <TitlePage>Dashboard</TitlePage>
      {/* <Link href={'/user'}>users</Link> |
      <Link href={'/user/tr5454hbf'}>detail</Link> */}
      <Content />
    </LayoutMain>
  );
}

export default Dashboard;
