import { BusinessLocationForm } from '../components/forms/BusinessLocationForm';
import InteractiveMap from '../components/Map';
import { Header } from '../components/shared';

export const HomePage = () => {
  return (
    <div className='w-full bg-[#FCFAFA]'>
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
