import { cn } from './utils';

/** Dark primary CTA: inset highlight + drop shadow + ring + text shadow */
const primaryCore = cn(
  'inline-flex cursor-pointer items-center justify-center gap-2 border-none font-semibold text-white',
  'bg-[#242526]',
  'shadow-[inset_0_1.5px_0_rgba(255,255,255,0.15),0_4px_7px_rgba(0,0,0,0.20),0_0_0_1.5px_#000000]',
  '[text-shadow:0_4px_4px_rgba(0,0,0,0.40)]',
  'transition-all duration-[120ms]',
  'hover:bg-[#2e2f30] hover:shadow-[inset_0_1.5px_0_rgba(255,255,255,0.20),0_6px_10px_rgba(0,0,0,0.25),0_0_0_1.5px_#000000]',
  'active:scale-[0.97] active:shadow-[inset_0_1.5px_0_rgba(255,255,255,0.10),0_2px_4px_rgba(0,0,0,0.20),0_0_0_1.5px_#000000]',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30',
  'disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-[#242526] disabled:active:scale-100'
);

export const primaryButtonClasses = cn(
  primaryCore,
  'rounded-lg px-8 py-[14px] text-base'
);

export const primaryButtonSmClasses = cn(primaryCore, 'rounded-lg px-4 py-2 text-sm');