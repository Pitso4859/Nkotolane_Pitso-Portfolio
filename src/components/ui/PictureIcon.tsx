import { cn } from '../../lib/utils';

type PictureIconSize = 'xs' | 'sm' | 'md' | 'lg';

type PictureIconProps = {
  src: string;
  alt?: string;
  size?: PictureIconSize;
  className?: string;
  imageClassName?: string;
  surface?: 'card' | 'transparent';
};

const sizeClasses: Record<PictureIconSize, string> = {
  xs: 'h-6 w-6 rounded-md p-1',
  sm: 'h-7 w-7 rounded-md p-1',
  md: 'h-9 w-9 rounded-md p-1.5',
  lg: 'h-10 w-10 rounded-lg p-1.5',
};

export default function PictureIcon({
  src,
  alt = '',
  size = 'sm',
  className,
  imageClassName,
  surface = 'card',
}: PictureIconProps) {
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center overflow-hidden',
        surface === 'card'
          ? 'bg-white shadow-sm ring-1 ring-[#e3e7ec] dark:bg-[#f8fafc] dark:ring-[#3a4350]'
          : 'bg-transparent shadow-none ring-0 dark:bg-transparent',
        sizeClasses[size],
        className
      )}
      aria-hidden={alt ? undefined : true}
    >
      <img
        src={src}
        alt={alt}
        decoding="async"
        className={cn('h-full w-full object-contain', imageClassName)}
      />
    </span>
  );
}
