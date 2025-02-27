import React from 'react';
import ImageWrapper from '@/components/common/ImageWrapper';

function UnderDevelopment() {
  return (
    <div className="bg-gray-100 flex h-screen flex-col items-center justify-center">
      <div className="relative mx-auto h-64 w-80">
        <ImageWrapper
          src="https://res.cloudinary.com/dyb4kpthp/image/upload/v1740638967/Under_Development_Image_neexm3.jpg"
          alt="Yoga in Progress"
        />
      </div>
      <h1 className="mt-10 text-3xl font-bold">
        Namaste! This Page is Under Construction
      </h1>
      <p className="text-gray-500 mt-5">
        We&apos;re currently working hard to bring you the best possible
        experience.
      </p>
      <p className="text-gray-500 mt-5">Please check back soon!</p>
    </div>
  );
}

export default UnderDevelopment;
