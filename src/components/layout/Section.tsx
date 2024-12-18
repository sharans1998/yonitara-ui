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
      className={`flex min-h-screen items-center justify-center ${className}`}
      style={{ backgroundColor }} // Apply the background color if provided
    >
      <div
        className={`${!fullScreen && 'mx-8 w-full md:mx-16 xl:mx-auto xl:max-w-6xl'}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
