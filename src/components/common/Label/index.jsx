import { Label as FlowbiteLabel } from 'flowbite-react';

export const Label = ({ className = '', ...props }) => (
  <FlowbiteLabel
    className={`text-gray900 text-sm font-medium ${className}`}
    {...props}
  />
);
