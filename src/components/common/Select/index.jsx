export const Select = ({ className = '', children, ...props }) => (
  <select
    className={`border-gray200 block w-full appearance-none rounded-lg border bg-white !bg-[url('@/assets/arrow-down.svg')] p-3 text-sm leading-tight text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 ${className}`}
    {...props}
  >
    {children}
  </select>
);
