import { Sidebar } from '@/components/shared';
import { Outlet } from 'react-router-dom';

export const RootLayout = () => (
  <div className='flex h-full overflow-x-hidden'>
    <Sidebar />
    <Outlet />
  </div>
);
