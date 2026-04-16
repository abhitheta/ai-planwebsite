import type { ReactNode } from 'react';
import { cn } from './utils';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: {
    value: number;
    positive: boolean;
  };
  description?: string;
  className?: string;
}

export function StatCard({ title, value, icon, trend, description, className }: StatCardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow',
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-[#252434] rounded-full flex items-center justify-center">
          {icon}
        </div>
        {trend && (
          <span
            className={cn(
              'inline-flex items-center text-sm font-medium px-2.5 py-1 rounded-full',
              trend.positive
                ? 'bg-[#B7FFE0] text-[#224229]'
                : 'bg-red-100 text-red-700'
            )}
          >
            {trend.positive ? '+' : ''}{trend.value}%
          </span>
        )}
      </div>
      <p className="text-sm text-[#3B394E] mb-1">{title}</p>
      <p className="text-3xl font-semibold text-[#252434] tracking-tight">{value}</p>
      {description && (
        <p className="text-xs text-[#3B394E] mt-2">{description}</p>
      )}
    </div>
  );
}
