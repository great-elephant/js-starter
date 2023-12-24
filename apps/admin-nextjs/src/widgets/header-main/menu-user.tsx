import { clearAuthSession } from '@/misc/session/heper.client';
import { useSession } from '@/misc/session';
import {
  Center,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Skeleton,
  Text,
} from '@sdks/uikit-react';
import { useRouter } from 'next/navigation';

export function MenuUser() {
  const router = useRouter();
  const { user, loading, logout } = useSession();

  function handleLogout() {
    logout();
    router.push('/login');
  }

  if (loading || !user) {
    return <Skeleton className='h-8 w-8 rounded-full bg-gray-200' />;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className='rounded-full'>
          <Center className='h-8 w-8 rounded-full bg-gray-200'>{user.firstName[0]}</Center>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='mr-4 w-[200px]'>
        <DropdownMenuLabel>
          {user.firstName}<br />
          <Text size={'sm'} className='font-light'>{user.email}</Text>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='cursor-pointer' onClick={handleLogout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}