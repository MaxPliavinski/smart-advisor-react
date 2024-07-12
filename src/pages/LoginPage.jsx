import { Button } from 'flowbite-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn) {
      return navigate('/');
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');

    navigate('/');
  };

  return (
    <div className='flex w-full items-center justify-center'>
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};
