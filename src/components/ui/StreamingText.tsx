import { cn } from '../../lib/utils';

type StreamingCursorProps = {
  visible: boolean;
  className?: string;
};

export function StreamingCursor({ visible, className }: StreamingCursorProps) {
  if (!visible) return null;
  return (
    <span
      className={cn('ml-0.5 inline-block animate-pulse font-normal text-zinc-400', className)}
      aria-hidden
    >
      |
    </span>
  );
}
