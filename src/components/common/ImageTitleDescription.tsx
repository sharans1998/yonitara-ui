import React from 'react';
import ContentWrapper from '../layout/ContentWrapper';
import Image from 'next/image';

const ImageTitleDescription = ({
  image,
  title,
  description,
  toggle,
}: {
  image: string;
  title: string;
  description: string;
  toggle?: boolean;
}) => {
  return (
    <ContentWrapper>
      <div
        className={`flex flex-col lg:flex-row items-center justify-center gap-14 ${
          toggle && 'flex-col-reverse lg:flex-row-reverse'
        }`}
      >
        <div className="w-full lg:w-1/2 relative aspect-video rounded-lg overflow-hidden">
          <Image
            src={image}
            alt="Image"
            className="object-cover w-full h-full bg-primary bg-opacity-30"
            fill
          />
        </div>
        <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
          <h1 className="text-2xl md:text-4xl font-poppins font-semibold text-primary">
            {title}
          </h1>
          <p className="mt-4 text-lg w-full text-start">{description}</p>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default ImageTitleDescription;
