import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from './utils';

interface PillButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  glowRing?: boolean;
}

const PillButton = forwardRef<HTMLButtonElement, PillButtonProps>(
  ({ className, variant = 'primary', size = 'md', glowRing = false, children, ...props }, ref) => {
    const variants = {
      primary: 'bg-[#36B37E] text-[#EFF0FF] hover:bg-[#2ea06e]',
      secondary: 'bg-[#5BE6AB] text-[#224229] hover:bg-[#4dd99e]',
      outline: 'bg-transparent border-2 border-[#36B37E] text-[#36B37E] hover:bg-[#36B37E]/10',
    };

    const sizes = {
      sm: 'px-5 py-2 text-xs',
      md: 'px-8 py-3.5 text-[15.6px]',
      lg: 'px-10 py-4 text-base',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'rounded-full font-normal tracking-[0.08px] transition-all duration-200 inline-flex items-center justify-center whitespace-nowrap',
          variants[variant],
          sizes[size],
          glowRing && 'shadow-[0_0_0_4.45px_#B7FFE0]',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

PillButton.displayName = 'PillButton';

export { PillButton };
export type { PillButtonProps };
