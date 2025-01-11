import React from 'react';
import Image from 'next/image';

function UnderDevelopment() {
  return (
    <div className="bg-gray-100 flex h-screen flex-col items-center justify-center">
      <Image
        src="https://sharans1998.github.io/yonitara-ui/images/UnderDevelopment.JPG" // Replace with an image of a yoga pose or a "Coming Soon" graphic
        alt="Yoga in Progress"
        width={300}
        height={300}
        className="rounded-md"
      />
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
