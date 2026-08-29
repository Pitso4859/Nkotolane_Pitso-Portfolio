import { cn } from './utils';

const primaryCore = cn(
  'inline-flex cursor-pointer items-center justify-center gap-2 font-semibold text-white',
  'rounded-md border border-[#172033] bg-[#172033] shadow-sm',
  'transition-colors duration-150 hover:border-[#0f172a] hover:bg-[#0f172a]',
  'active:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2',
  'dark:border-[#3b82f6] dark:bg-[#3b82f6] dark:text-white dark:hover:border-[#2563eb] dark:hover:bg-[#2563eb]',
  'dark:focus-visible:ring-offset-[#0b0f17] disabled:cursor-not-allowed disabled:opacity-50'
);

export const primaryButtonClasses = cn(primaryCore, 'px-5 py-2.5 text-sm');
export const primaryButtonSmClasses = cn(primaryCore, 'px-3.5 py-2 text-sm');
