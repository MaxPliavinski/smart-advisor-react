export const Input = ({ className, ...props }) => (
  <input
    type='text'
    className={`border-gray200 text-gray900 block w-full rounded-lg border bg-white p-3 text-sm leading-tight focus:border-cyan-500 focus:ring-cyan-500 ${className}`}
    {...props}
  />
);
