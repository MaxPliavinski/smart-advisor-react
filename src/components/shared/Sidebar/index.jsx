import { Link } from 'react-router-dom';
import { CompanyLogo } from '@/components/icons';
import noiseSrc from '@/assets/noise-fg.png';
import bgPatternSrc from '@/assets/bg-pattern.png';

export const Sidebar = () => (
  <aside className='relative w-[340px] bg-black'>
    <div className='p-6'>
      <Link to='/' className='mb-7 inline-block'>
        <CompanyLogo />
      </Link>
      <div className='text-2xl font-semibold text-white'>Smart Advisor</div>
      <div className='text-sm text-moon-400'>
        Commercial licensing: starting, modifying or closing business
      </div>
    </div>
    <img
      src={noiseSrc}
      alt='Slightly visible noise that covers the sidebar'
      className='pointer-events-none absolute left-0 top-0 z-[1] h-full w-full'
    />
    <div className='pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden'>
      <img src={bgPatternSrc} alt='' className='h-[450px] w-full' />
      <div className='absolute left-0 top-0 h-full w-full bg-gradient-to-b from-black to-white/0'></div>
    </div>
  </aside>
);
