import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { forwardRef, type ComponentPropsWithoutRef, type ComponentRef } from 'react';
import { cn } from '../../lib/utils';

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = forwardRef<
  ComponentRef<typeof HoverCardPrimitive.Content>,
  ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = 'center', sideOffset = 8, ...props }, ref) => (
  <HoverCardPrimitive.Portal>
    <HoverCardPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        'z-[10001] w-72 rounded-xl border border-zinc-200 bg-white p-4 shadow-lg shadow-zinc-200/60 outline-none',
        'transition-opacity duration-150',
        className
      )}
      {...props}
    />
  </HoverCardPrimitive.Portal>
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
