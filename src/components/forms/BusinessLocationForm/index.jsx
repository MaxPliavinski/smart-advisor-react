import { useNavigate } from 'react-router-dom';
import { Button, Progress } from 'flowbite-react';
import { ArrowLeft, Warning, Redirect } from '@/components/icons';
import { Select, Label, Input } from '@/components/common';
import { businessLocationFormFields } from '@/data';
import { Alert } from '@/components/ui';

export const BusinessLocationForm = ({ className = '' }) => {
  const isAlertVisbile = true;
  const isRestrictionAcknowledgementPresent = true;
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
      {isAlertVisbile && (
        <Alert color='failure' className='mt-6 rounded-md'>
          <div className='mb-[6px] flex items-center gap-2 font-semibold'>
            <Warning />
            You will not be able to perform activities in the specified area
          </div>
          <span className='text-sm'>
            Select another location or use map based insights to find the best
            one
          </span>
          <Button
            size='sm'
            color='failure'
            className='bg-red700 mt-3 flex text-xs font-medium text-white *:items-center *:gap-2'
          >
            Map Based Insights <Redirect />
          </Button>
        </Alert>
      )}
      <Button
        type='submit'
        className='bg-primary-600 hover:!bg-primary-600/80 mt-8 w-full'
      >
        {isRestrictionAcknowledgementPresent
          ? 'Continue with restriction acknowledgement'
          : 'Continue'}
      </Button>
    </form>
  );
};
