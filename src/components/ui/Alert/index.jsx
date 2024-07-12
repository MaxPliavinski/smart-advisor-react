import { Alert as FlowbiteReact } from 'flowbite-react';

const customTheme = {
  color: {
    failure: 'bg-[#FCEBEC] text-[#9D272B]',
  },
};

export const Alert = ({ children, ...props }) => (
  <FlowbiteReact theme={customTheme} {...props}>
    {children}
  </FlowbiteReact>
);
