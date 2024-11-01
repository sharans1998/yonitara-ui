// components/Section.tsx
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string; // Allow passing custom classes
  backgroundColor?: string; // Optional specific prop for background color
  fullScreen?: boolean; // Optional specific prop for full screen
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  backgroundColor,
  fullScreen = false,
}) => {
  return (
    <section
      className={`min-h-screen flex flex-col justify-center snap-start snap-always ${className}`}
      style={{ backgroundColor }} // Apply the background color if provided
    >
      <div
        className={`${!fullScreen && 'lg:max-w-7xl lg:mx-auto mx-8 md:px-4'}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
