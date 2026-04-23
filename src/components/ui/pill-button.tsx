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
      primary: 'bg-[#0f2d52] text-[#e8f0f8] hover:bg-[#0052a3]',
      secondary: 'bg-[#0066cc] text-[#0f2d52] hover:bg-[#0066cc]',
      outline: 'bg-transparent border-2 border-[#0f2d52] text-[#0f2d52] hover:bg-[#0f2d52]/10',
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
          glowRing && 'shadow-[0_0_0_4.45px_#e8f0f8]',
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
