import { PropsWithChildren } from 'react';
import { Heading } from '@sdks/uikit-react';

export function TitlePage({ children }: PropsWithChildren) {
  return <Heading className='font-semibold py-4 text-xl'>{children}</Heading>;
}
