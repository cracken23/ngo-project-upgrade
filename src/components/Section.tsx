
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'light' | 'primary' | 'secondary';
  id?: string;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  background = 'white',
  id
}) => {
  const bgClasses = {
    white: 'bg-white',
    light: 'bg-neutral-50',
    primary: 'bg-primary/5',
    secondary: 'bg-secondary/5',
  };

  return (
    <section 
      id={id}
      className={`py-12 md:py-20 ${bgClasses[background]} ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
