import { useNavigate } from 'react-router-dom';
import { Progress } from 'flowbite-react';
import { ArrowLeft } from '@/components/icons';
import { Select, Label, Input } from '../../common';
import { businessLocationFormFields } from '@/data';

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
        {businessLocationFormFields.map(
          ({ id, label, type, required, ...field }) => (
            <div key={id} className='flex flex-col gap-2'>
              <Label htmlFor={id} value={label} />
              {type === 'select' && (
                <Select id={id} required={required}>
                  {field.options.map((option, i) => (
                    <option key={option + i}>{option}</option>
                  ))}
                </Select>
              )}
              {type === 'input' && (
                <Input
                  id={id}
                  required={required}
                  placeholder={field.placeholder}
                />
              )}
              {!required && (
                <div className='text-gray500 text-sm leading-tight'>
                  Optional
                </div>
              )}
            </div>
          ),
        )}
      </div>
    </form>
  );
};
