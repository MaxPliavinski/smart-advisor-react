import { Stepper } from '@/components/ui';
import { FORM_STEPS } from '@/data';

export const Header = () => {
  return (
    <header className='w-full py-6 pl-[52.5px] pr-6'>
      <Stepper steps={FORM_STEPS} />
    </header>
  );
};
