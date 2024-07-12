export const MapMarker = ({ className = '' }) => (
  <svg
    width='60'
    height='66'
    viewBox='0 0 60 66'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M30.0002 0C13.4313 0 0 13.4726 0 30.0917C0 43.5901 9.46433 56.0206 22.6199 59.2986C27.481 60.5551 28.9938 65.275 28.9938 65.275C29.147 65.697 29.5453 66 30.0183 66C30.4909 66 30.8892 65.697 31.0408 65.275C31.0408 65.275 32.5552 60.5551 37.4162 59.2986C50.4927 56.0529 60 44.2105 60 30.0917C60 13.4726 46.5687 0 30.0002 0Z'
      fill='#E0373D'
    />
    <circle cx='30' cy='30' r='28' fill='white' />
    <rect x='14' y='14' width='32' height='32' rx='16' fill='#E0373D' />
    <rect
      x='11'
      y='11'
      width='38'
      height='38'
      rx='19'
      stroke='#FF1100'
      strokeOpacity='0.2'
      strokeWidth='6'
    />
    <path
      d='M35.9996 24L23.9996 36M23.9996 24L35.9996 36'
      stroke='white'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
