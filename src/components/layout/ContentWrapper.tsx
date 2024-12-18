// components/ContentWrapper.tsx
import React from 'react';

interface ContentWrapperProps {
  children: React.ReactNode;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
  return (
    <section className="font flex h-auto min-h-screen w-full max-w-7xl justify-center px-4 md:mx-auto">
      {children}
    </section>
  );
};

export default ContentWrapper;
