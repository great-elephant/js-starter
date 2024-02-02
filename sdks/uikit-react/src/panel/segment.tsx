'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@uikit-react/lib/utils';
import { useContext, useEffect, useMemo, useRef } from 'react';

const Segment = ({ value, children }: TabProps) => {
  const [activeTab, setActiveTab] = React.useState(value);
  return (
    <TabContext.Provider value={{
      activeTab,
    }}>
      <TabsPrimitive.Root
        value={activeTab}
        onValueChange={setActiveTab}
      >
        {children}
      </TabsPrimitive.Root>
    </TabContext.Provider>
  );
};

type TabProps = {
  value: string;
  children: React.ReactElement<TabTriggerProps>[];
}

const TabContext = React.createContext<{
  activeTab: string;
}>(null as any);

const SegmentList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, children, ...props }, ref) => {

  const tabIndicatorRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLDivElement[]>([]);
  const { activeTab } = useContext(TabContext);
  const tabValueRef = useRef<string[]>([]);

  const newChildren = useMemo(() => React.Children.map(children as any, (child: React.ReactElement<TabTriggerProps>, index) => {
    tabValueRef.current.push(child.props.value);
    return React.cloneElement(child, {
      ref: (ref: any) => (childrenRef.current[index] = ref),
    } as any);
  }), [children]);

  useEffect(() => {
    if (!tabIndicatorRef.current) return;
    const idx = tabValueRef.current.findIndex(tab => tab === activeTab);

    const items = childrenRef.current.slice(0, idx);
    const left = items.reduce((prev, curr) => prev + curr.getBoundingClientRect().width, 0);
    const width = childrenRef.current[idx]?.getBoundingClientRect().width || 0;
    const height = childrenRef.current[idx]?.getBoundingClientRect().height || 0;
    tabIndicatorRef.current.style.left = `${left + 4}px`;
    tabIndicatorRef.current.style.width = `${width}px`;
    tabIndicatorRef.current.style.height = `${height}px`;
  }, [activeTab]);

  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        'inline-flex h-10 rounded-md bg-muted p-1 text-muted-foreground relative',
        className
      )}
      {...props}
    >
      {newChildren}
      <div ref={tabIndicatorRef} className='transition-all duration-300 ease-in-out absolute top-[4px] bg-background shadow-sm rounded-sm ' />
    </TabsPrimitive.List>
  );
});
SegmentList.displayName = TabsPrimitive.List.displayName;

interface TabTriggerProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> { }
const SegmentTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabTriggerProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'z-[1] inline-flex items-center border-none bg-transparent outline-none justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground',
      className
    )}
    {...props}
  />
));
SegmentTrigger.displayName = TabsPrimitive.Trigger.displayName;

const SegmentPanel = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className
    )}
    {...props}
  />
));
SegmentPanel.displayName = TabsPrimitive.Content.displayName;

export { Segment, SegmentList, SegmentTrigger, SegmentPanel };
