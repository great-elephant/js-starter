'use client';

import { Children, MutableRefObject, RefObject, cloneElement, createContext, forwardRef, useContext, useEffect, useMemo, useRef, useState } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@uikit-react/lib/utils';
import React from 'react';

type TabProps = {
  value: string;
  children: React.ReactElement<TabTriggerProps>[];
}

const TabContext = createContext<{
  activeTab: string;
}>(null as any);

const Tab = ({ value, children }: TabProps) => {
  const [activeTab, setActiveTab] = useState(value);
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

interface TabListProps {
  children: React.ReactElement<TabTriggerProps>[];
  className?: string;
}

const TabList = ({ className, children }: TabListProps) => {
  const tabIndicatorRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLDivElement[]>([]);
  const { activeTab } = useContext(TabContext);
  const tabValueRef = useRef<string[]>([]);

  const newChildren = useMemo(() => React.Children.map(children, (child: React.ReactElement<TabTriggerProps>, index) => {
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
    tabIndicatorRef.current.style.left = `${left}px`;
    tabIndicatorRef.current.style.width = `${width}px`;
  }, [activeTab]);

  return (
    <TabsPrimitive.List
      className={cn(
        'flex items-center border-b-2 relative',
        className
      )}
    >
      {newChildren}
      <div ref={tabIndicatorRef} className='ransition-all duration-300 ease-in-out absolute -bottom-[2px] left-0 bg-primary h-[2px]' />
    </TabsPrimitive.List>
  );
};

interface TabTriggerProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> { }
const TabTrigger = forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabTriggerProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'px-4 py-2',
      className
    )}
    {...props}
  />
));
TabTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabPanel = forwardRef<
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
TabPanel.displayName = TabsPrimitive.Content.displayName;

export { Tab, TabList, TabTrigger, TabPanel };
