import { useNavigate } from 'react-router-dom';
import { Progress } from 'flowbite-react';
import { ArrowLeft } from '@/components/icons';
import { Select, Label } from '../../common';

export const BusinessLocationForm = ({ className = '' }) => {
  const navigate = useNavigate();
  const filledFields = 2;

  const handleGoBack = () => navigate(-1);

  return (
    <form className={`${className}`}>
      <div className='flex items-center'>
        <button
          onClick={handleGoBack}
          className='text-gray500 flex w-fit items-center gap-[6px] border-none bg-none'
        >
          <ArrowLeft className='text-gray500 h-4 w-4' />
          <span className='text-sm font-semibold leading-tight'>Back</span>
        </button>
        <div className='w-full'>
          <Progress
            progress={(filledFields / 4) * 100}
            className='mx-auto h-[6px] w-[120px] [&>div]:h-full'
          />
        </div>
      </div>
      <h1 className='text-gray900 mt-3 text-2xl font-semibold leading-tight'>
        Specify the business location
      </h1>
      <div className='mt-8 flex flex-col gap-4'>
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='countries' value='Amana' />
          </div>
          <Select id='countries' required>
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </Select>
        </div>
      </div>
    </form>
  );
};
