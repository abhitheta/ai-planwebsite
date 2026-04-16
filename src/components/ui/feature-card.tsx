import type { ReactNode } from 'react';
import { cn } from './utils';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <div className={cn('flex flex-col items-start gap-[27px] max-w-[295px]', className)}>
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 bg-[#252434] rounded-full flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <span className="text-[15.6px] leading-[27px] tracking-[0.08px] text-[#252434] font-normal">
          {title}
        </span>
      </div>
      <p className="text-[15.6px] leading-[27px] tracking-[0.08px] text-[#3B394E] font-normal">
        {description}
      </p>
    </div>
  );
}
