// components/ContentWrapper.tsx
import React from 'react';

interface ContentWrapperProps {
  children: React.ReactNode;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
  return (
    <section className="min-h-screen snap-start snap-always max-w-7xl font flex justify-center mx-4 md:mx-auto">
      {children}
    </section>
  );
};

export default ContentWrapper;
