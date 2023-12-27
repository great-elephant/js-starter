import { PropsWithChildren } from 'react';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <div className='border-b py-10 text-3xl font-semibold'>
        <div className='container'>User management</div>
      </div>
      <div className='bg-gray-50 h-screen'>
        {children}
      </div>
    </>
  );
}
