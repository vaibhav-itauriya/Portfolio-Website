import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div 
      className={`
        bg-dark-lighter rounded-lg border border-primary/20 
        ${hover ? 'hover:transform hover:scale-105 hover:shadow-xl' : ''} 
        transition-all duration-300 
        ${className}
      `}
    >
      {children}
    </div>
  );
}