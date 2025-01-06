import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export function Badge({ children, variant = 'primary' }: BadgeProps) {
  const variants = {
    primary: 'bg-primary/20 text-primary',
    secondary: 'bg-secondary/20 text-secondary'
  };

  return (
    <span className={`text-xs px-2 py-1 rounded-full ${variants[variant]}`}>
      {children}
    </span>
  );
}