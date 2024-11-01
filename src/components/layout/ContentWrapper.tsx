// components/ContentWrapper.tsx
import React from 'react';

interface ContentWrapperProps {
  children: React.ReactNode;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
  return (
    <section className="min-h-screen snap-start snap-always max-w-7xl mx-auto font">
      {children}
    </section>
  );
};

export default ContentWrapper;
