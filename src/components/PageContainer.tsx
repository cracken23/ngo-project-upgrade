
import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

const PageContainer: React.FC<PageContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`container mx-auto px-4 py-8 md:py-12 ${className}`}>
      {children}
    </div>
  );
};

export default PageContainer;
