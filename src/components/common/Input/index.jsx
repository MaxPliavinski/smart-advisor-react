import { forwardRef } from 'react';
import cn from 'classnames';

export const InputWithoutRef = ({ className, error, ...props }, ref) => (
  <input
    type='text'
    className={cn(
      `block w-full rounded-lg border border-gray200 bg-white p-3 text-sm leading-tight text-gray900 focus:border-cyan-500 focus:ring-cyan-500 ${className}`,
      {
        'border-red-600 bg-red-500/15 text-red-500 focus:border-red-500 focus:ring-red-500':
          error,
      },
    )}
    ref={ref}
    {...props}
  />
);

export const Input = forwardRef(InputWithoutRef);
