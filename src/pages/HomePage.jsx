import { BusinessLocationForm } from '../components/forms/BusinessLocationForm';
import { Header } from '../components/shared';

export const HomePage = () => {
  return (
    <div className='w-full bg-[#FCFAFA]'>
      <Header />
      <div className='py-[32px] pl-[56px] pr-[80px]'>
        <BusinessLocationForm className='w-full max-w-[550px]' />
      </div>
    </div>
  );
};
