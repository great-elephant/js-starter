'use client';
import {
  Segment, SegmentPanel, SegmentList, SegmentTrigger,
  Tab, TabPanel, TabList, TabTrigger,
  DatePicker, Switch, Input, Slider, Calendar, Checkbox, Radio,
  Select, SelectGroup, SelectLabel, SelectOption,
} from '@sdks/uikit-react';

export function Content() {
  return (
    <div className='flex flex-col gap-8'>
      <Tab value='tab1'>
        <TabList className='mx-auto'>
          <TabTrigger value='tab1'>Tab 1</TabTrigger>
          <TabTrigger value='tab2'>Tab 2</TabTrigger>
          <TabTrigger value='tab3'>Tab 3</TabTrigger>
          <TabTrigger value='tab4'>Tab 4</TabTrigger>
          <TabTrigger value='tab5'>Tab 5</TabTrigger>
        </TabList>

        <TabPanel value='tab1'>
          <Segment value='seg1'>
            <div className='flex justify-end'>
              <SegmentList>
                <SegmentTrigger value='seg1'>Segment 1</SegmentTrigger>
                <SegmentTrigger value='seg2'>Segment 2</SegmentTrigger>
                <SegmentTrigger value='seg3'>Segment 3</SegmentTrigger>
              </SegmentList>
            </div>
            <SegmentPanel value='seg1' className=''>
              <div className='md:max-w-xs flex flex-col gap-4 justify-start'>
                seg 1
                <DatePicker placeholder='Date picker' />
                <Switch />
                <Input placeholder='Input text' />
                <Input placeholder='Input password' type='password' />
                <Calendar />

                <Select value='grapes'>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectOption value='apple'>Apple</SelectOption>
                    <SelectOption value='banana'>Banana</SelectOption>
                    <SelectOption value='blueberry'>Blueberry</SelectOption>
                    <SelectOption value='grapes'>Grapes</SelectOption>
                    <SelectOption value='pineapple'>Pineapple</SelectOption>
                  </SelectGroup>
                </Select>
                <Checkbox />
                <div><Radio /></div>

                <Slider value={[1, 100]} min={0} max={100} />
              </div>
            </SegmentPanel>
            <SegmentPanel value='seg2'>seg 2</SegmentPanel>
            <SegmentPanel value='seg3'>seg 3</SegmentPanel>
          </Segment>
        </TabPanel>
        <TabPanel value='tab2'>tab 2.</TabPanel>
        <TabPanel value='tab3'>tab 3.</TabPanel>
        <TabPanel value='tab4'>tab 4.</TabPanel>
        <TabPanel value='tab5'>tab 5.</TabPanel>
      </Tab>
    </div>
  );
}
