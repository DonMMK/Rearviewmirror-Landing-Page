import React from 'react';
import { AnimatedElement } from './AnimatedElement';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  center = false,
  className = ''
}) => {
  const alignment = center ? 'text-center' : 'text-left';
  
  return (
    <div className={`mb-12 ${alignment} ${className}`}>
      <AnimatedElement>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-700">{title}</h2>
        {subtitle && (
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        )}
      </AnimatedElement>
    </div>
  );
};