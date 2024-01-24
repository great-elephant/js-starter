import { PropsWithChildren } from 'react';
import { Heading } from '@sdks/uikit-react';

export function TitlePage({ children }: PropsWithChildren) {
  return <Heading className='font-semibold pb-4 text-2xl'>{children}</Heading>;
}
