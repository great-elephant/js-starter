import { LayoutMain } from '@/widgets/layout-main';
import { PageTitle } from '@/widgets/page-title';
import { Segment, SegmentList, SegmentPanel, SegmentTrigger, Tab, TabList, TabPanel, TabTrigger } from '@uikit-react/panel';
import Link from 'next/link';

function UserList(): JSX.Element {
  return (
    <LayoutMain>
      <PageTitle>Disable user</PageTitle>
      <Segment value='account'>
        <SegmentList>
          <SegmentTrigger value='account'>Your account</SegmentTrigger>
          <SegmentTrigger value='password'>Password here</SegmentTrigger>
          <SegmentTrigger value='setting'>Your setting</SegmentTrigger>
        </SegmentList>
        <SegmentPanel value='account'>Make changes to your account here.</SegmentPanel>
        <SegmentPanel value='password'>Change your password here.</SegmentPanel>
        <SegmentPanel value='setting'>Change your setting here.</SegmentPanel>
      </Segment>
      <Tab value='account'>
        <TabList className='mx-auto'>
          <TabTrigger value='account'>Account</TabTrigger>
          <TabTrigger value='password'>Password</TabTrigger>
          <TabTrigger value='password2'>Password 2</TabTrigger>
          <TabTrigger value='password3'>Password 3</TabTrigger>
          <TabTrigger value='password4'>Change your passwordd 4</TabTrigger>
          <TabTrigger value='password5'>Password 5</TabTrigger>
        </TabList>

        <TabPanel value='account'>
          <Segment value='account'>
            <div className='flex justify-end'>
              <SegmentList>
                <SegmentTrigger value='account'>Your account</SegmentTrigger>
                <SegmentTrigger value='password'>Password here</SegmentTrigger>
                <SegmentTrigger value='setting'>Your setting</SegmentTrigger>
              </SegmentList>
            </div>
            <SegmentPanel value='account'>Make changes to your account here.</SegmentPanel>
            <SegmentPanel value='password'>Change your password here.</SegmentPanel>
            <SegmentPanel value='setting'>Change your setting here.</SegmentPanel>
          </Segment>
        </TabPanel>
        <TabPanel value='password'>Change your password here.</TabPanel>
        <TabPanel value='password2'>Change your password here 2.</TabPanel>
        <TabPanel value='password3'>Change your password here 3.</TabPanel>
        <TabPanel value='password4'>Change your password here 4.</TabPanel>
        <TabPanel value='password5'>Change your password here 5.</TabPanel>
      </Tab>
    </LayoutMain>
  );
}

export default UserList;
