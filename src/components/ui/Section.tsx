import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  title: string;
}

export function Section({ children, id, className = '', title }: SectionProps) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16 relative">
          <span className="relative z-10">{title}</span>
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></span>
        </h2>
        {children}
      </div>
    </section>
  );
}