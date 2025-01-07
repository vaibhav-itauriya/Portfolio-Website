import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconButtonProps {
  icon: LucideIcon;
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function IconButton({ icon: Icon, label, href, onClick, className = '' }: IconButtonProps) {
  const baseClasses = `
    flex items-center gap-2 px-4 py-2 rounded-lg
    text-primary hover:text-primary-light
    transition-colors duration-300
    ${className}
  `;

  if (href) {
    return (
      <a href={href} className={baseClasses} target="_blank" rel="noopener noreferrer">
        <Icon size={20} />
        <span>{label}</span>
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      <Icon size={20} />
      <span>{label}</span>
    </button>
  );
}