import { useNavigate } from 'react-router-dom';
import { BusinessLocationForm } from '../components/forms/BusinessLocationForm';
import InteractiveMap from '../components/Map';
import { Header } from '../components/shared';
import { useEffect } from 'react';

export const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (!isLoggedIn) {
      return navigate('/login');
    }
  }, []);

  return (
    <div className='flex min-h-full w-full flex-col bg-[#FCFAFA]'>
      <Header />
      <div className='flex'>
        <div className='py-[32px] pl-[56px] pr-[80px]'>
          <BusinessLocationForm className='w-full max-w-[550px]' />
        </div>
        <InteractiveMap />
      </div>
    </div>
  );
};
