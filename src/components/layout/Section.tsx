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
      className={`flex min-h-screen snap-start snap-always flex-col justify-center ${className}`}
      style={{ backgroundColor }} // Apply the background color if provided
    >
      <div
        className={`${!fullScreen && 'mx-8 md:mx-16 md:px-4 lg:max-w-6xl xl:mx-auto'}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
