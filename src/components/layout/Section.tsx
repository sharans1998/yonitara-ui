// components/Section.tsx
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string; // Allow passing custom classes
  backgroundColor?: string; // Optional specific prop for background color
}

const Section: React.FC<SectionProps> = ({ children, className = '', backgroundColor }) => {
  return (
    <section
      className={`min-h-screen snap-start snap-always ${className}`}
      style={{ backgroundColor }} // Apply the background color if provided
    >
      {children}
    </section>
  );
};

export default Section;