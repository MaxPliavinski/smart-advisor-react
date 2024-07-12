import { forwardRef } from 'react';

const SelectWithoutRef = ({ className = '', children, ...props }, ref) => (
  <select
    className={`block w-full appearance-none rounded-lg border border-gray-200 bg-white bg-[url('/assets/arrow-down.svg')] p-3 text-sm leading-tight text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 ${className}`}
    ref={ref}
    {...props}
  >
    {children}
  </select>
);

export const Select = forwardRef(SelectWithoutRef);
