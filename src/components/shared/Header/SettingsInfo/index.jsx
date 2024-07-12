import { SAFlag } from '@/components/icons';
import { Button } from 'flowbite-react';

export const SettingsInfo = () => {
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <div className='flex items-center gap-8'>
      <div className='flex items-center gap-2'>
        <SAFlag />
        <span className='text-gray900 text-sm font-medium'>العربية</span>
      </div>
      <Button
        size='sm'
        color='light'
        className='border-gray200'
        onClick={handleLogout}
      >
        Leave
      </Button>
    </div>
  );
};
