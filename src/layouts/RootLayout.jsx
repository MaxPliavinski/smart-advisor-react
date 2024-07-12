import { Sidebar } from '@/components/shared';
import { Outlet } from 'react-router-dom';

export const RootLayout = () => (
  <div className='flex min-h-screen'>
    <Sidebar />
    <Outlet />
  </div>
);
