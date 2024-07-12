import { SAFlag } from '@/components/icons';
import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

export const SettingsInfo = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <div className='flex items-center gap-8'>
      <div className='flex items-center gap-2'>
        <SAFlag />
        <span className='text-sm font-medium text-gray900'>العربية</span>
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
