import { Stepper } from '@/components/ui';
import { FORM_STEPS } from '@/data';
import { SettingsInfo } from './SettingsInfo';
import { useSearchParams } from 'react-router-dom';

export const Header = () => {
  const [searchParams] = useSearchParams();
  const activeStep = searchParams.get('step');

  return (
    <header className='flex w-full justify-between py-6 pl-[52.5px] pr-6'>
      <Stepper steps={FORM_STEPS} activeStep={activeStep} />
      <SettingsInfo />
    </header>
  );
};
