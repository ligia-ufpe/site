import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden',
          {
            'bg-[#FF4B1F] hover:bg-[#FF4B1F]/90 text-white shadow-lg shadow-[#FF4B1F]/20': 
              variant === 'primary',
            'bg-[#FF4B1F]/90 hover:bg-[#FF4B1F]/80 text-white shadow-lg shadow-[#FF4B1F]/20': 
              variant === 'secondary',
            'border-2 border-[#FF4B1F] text-[#FF4B1F] hover:bg-[#FF4B1F]/10': 
              variant === 'outline',
            'text-[#FF4B1F] hover:bg-[#FF4B1F]/10': 
              variant === 'ghost',
            'h-9 px-4 text-sm': size === 'sm',
            'h-11 px-6 text-base': size === 'md',
            'h-14 px-8 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);