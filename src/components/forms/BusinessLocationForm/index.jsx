import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button, Progress } from 'flowbite-react';
import { ArrowLeft, Warning, Redirect } from '@/components/icons';
import { Select, Label, Input } from '@/components/common';
import { businessLocationFormFields, FORM_STEPS } from '@/data';
import { Alert } from '@/components/ui';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BusinessLocationFormSchema } from './schema';

export const BusinessLocationForm = ({ className = '' }) => {
  const [searchParams] = useSearchParams();
  const activeStep = searchParams.get('step') || 'basics';
  const isAlertVisbile = true;
  const isRestrictionAcknowledgementPresent = true;
  const navigate = useNavigate();
  const [filledFields, setFilledFields] = useState(2);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(BusinessLocationFormSchema),
    defaultValues: {
      amana: 'Riyadh',
      municipality: 'Al Olaya',
    },
  });

  watch((data) => {
    const filledFields = Object.values(data).filter((value) => value).length;

    setFilledFields(filledFields);
  });

  const handleGoBack = () => navigate(-1);

  const onSubmit = (data) => {
    console.log('Form data: ', data);

    const activeStepIndex = FORM_STEPS.findIndex((step) => step === activeStep);

    if (activeStepIndex !== FORM_STEPS.length - 1) {
      navigate('/?step=' + FORM_STEPS.at(activeStepIndex + 1));
    }
  };

  useEffect(() => {
    reset();
  }, [reset, isSubmitSuccessful]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${className}`}>
      <div className='flex items-center'>
        <button
          onClick={handleGoBack}
          className='flex w-fit items-center gap-[6px] border-none bg-none text-gray500'
        >
          <ArrowLeft className='h-4 w-4 text-gray500' />
          <span className='text-sm font-semibold leading-tight'>Back</span>
        </button>
        <div className='w-full'>
          <Progress
            progress={(filledFields / 4) * 100}
            className='mx-auto h-[6px] w-[120px] [&>div]:h-full'
          />
        </div>
      </div>
      <h1 className='mt-3 text-2xl font-semibold leading-tight text-gray900'>
        Specify the business location
      </h1>
      <div className='mt-8 flex flex-col gap-4'>
        {businessLocationFormFields.map(
          ({ id, label, type, required, ...field }) => {
            const error = errors[id]?.message;

            return (
              <div key={id} className='flex flex-col gap-2'>
                <Label htmlFor={id} value={label} />
                {type === 'select' && (
                  <Select
                    id={id}
                    required={required}
                    color={error ? 'failure' : undefined}
                    {...register(id)}
                  >
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
                    error={error}
                    {...register(id)}
                  />
                )}
                {error && (
                  <span className='text-sm font-medium text-red-500'>
                    {error}
                  </span>
                )}
                {!required && !error && (
                  <div className='text-sm leading-tight text-gray500'>
                    Optional
                  </div>
                )}
              </div>
            );
          },
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
            className='mt-3 flex bg-red700 text-xs font-medium text-white *:items-center *:gap-2'
          >
            Map Based Insights <Redirect />
          </Button>
        </Alert>
      )}
      <Button
        type='submit'
        className='mt-8 w-full bg-primary-600 hover:!bg-primary-600/80'
      >
        {isRestrictionAcknowledgementPresent
          ? 'Continue with restriction acknowledgement'
          : 'Continue'}
      </Button>
    </form>
  );
};
