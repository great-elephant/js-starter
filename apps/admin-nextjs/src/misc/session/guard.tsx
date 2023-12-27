import { PropsWithChildren } from 'react';
import { AdminRole } from '@sdks/types-admin';
import { useSession } from '.';

export function Guard({ children, role }: PropsWithChildren<{ role: AdminRole }>) {
  const { user } = useSession();

  if (user?.role !== role) return <></>;

  return <>{children}</>;
}