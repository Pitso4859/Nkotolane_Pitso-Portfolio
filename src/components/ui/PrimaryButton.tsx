import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { primaryButtonClasses, primaryButtonSmClasses } from '../../lib/primary-button-styles';
import { cn } from '../../lib/utils';

type PrimaryButtonBaseProps = {
  children: ReactNode;
  className?: string;
  size?: 'default' | 'sm';
};

type PrimaryButtonAsButton = PrimaryButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
    download?: undefined;
  };

type PrimaryButtonAsLink = PrimaryButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    download?: boolean | string;
  };

export type PrimaryButtonProps = PrimaryButtonAsButton | PrimaryButtonAsLink;

export default function PrimaryButton({
  children,
  className,
  size = 'default',
  href,
  download,
  ...props
}: PrimaryButtonProps) {
  const classes = cn(
    size === 'sm' ? primaryButtonSmClasses : primaryButtonClasses,
    className
  );

  if (href) {
    const { ...anchorProps } = props as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} download={download} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { type = 'button', ...buttonProps } = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
