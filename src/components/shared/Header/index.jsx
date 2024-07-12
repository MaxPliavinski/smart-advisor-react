import { Stepper } from '@/components/ui';
import { FORM_STEPS } from '@/data';
import { SettingsInfo } from './SettingsInfo';

export const Header = () => {
  return (
    <header className='flex w-full justify-between py-6 pl-[52.5px] pr-6'>
      <Stepper steps={FORM_STEPS} />
      <SettingsInfo />
    </header>
  );
};
