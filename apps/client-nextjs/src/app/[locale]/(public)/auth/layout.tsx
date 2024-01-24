import { PropsWithChildren } from 'react';
import { ThemeSwitcher } from '@uikit-react/theme';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <ThemeSwitcher className='absolute top-5 right-5' />
    </>
  );
}