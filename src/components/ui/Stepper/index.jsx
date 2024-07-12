import cn from 'classnames';
import { CheckMark } from '../../icons';

export const Stepper = ({ steps, activeStep }) => {
  const activeStepIndex = steps.findIndex((step) => activeStep === step);

  return (
    <ol className='text-gray400 flex w-full items-center text-center'>
      {steps.map((step, i) => (
        <li
          key={step + i}
          className={cn(
            `after:border-1 after:border-gray300 flex flex-[0] items-center after:mx-6 after:hidden after:h-[1px] after:w-full after:min-w-16 after:max-w-16 after:border-b sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-6`,
            { 'text-gray400': activeStep !== step },
            { 'text-primary-700': i <= activeStepIndex },
            { 'after:!hidden': i == steps.length - 1 },
          )}
        >
          <span className="after:text-gray300 flex flex-col items-center after:mx-2 after:content-['/'] sm:after:hidden">
            {i < activeStepIndex ? (
              <CheckMark />
            ) : (
              <span
                className={cn(
                  'border-gray400 flex h-5 w-5 shrink-0 items-center justify-center rounded-xl border text-xs font-semibold leading-tight',
                  { 'border-primary-700': i === activeStepIndex },
                )}
              >
                {i + 1}
              </span>
            )}
            <span className='mt-[6px] text-sm font-medium capitalize leading-tight'>
              {step}
            </span>
          </span>
        </li>
      ))}
    </ol>
  );
};
