import React from 'react';
import Image from 'next/image';
import ContentWrapper from '../layout/ContentWrapper';

const HeroBannerSection = ({
  title,
  subTitle,
  image,
}: {
  title: string;
  subTitle: string;
  image: string;
}) => {
  return (
    <div className="w-full h-full relative">
      {/* Image */}
      <div className="h-screen w-screen z-0 absolute top-0 left-0">
        <Image
          src={image}
          className="object-cover object-center"
          alt="Hero Banner"
          fill
        />
      </div>

      {/* Text and Title */}
      <div className="absolute z-10 w-full">
        <ContentWrapper>
          <div className="h-screen w-1/2 ml-auto flex flex-col justify-center items-end relative">
            <div>
              <h1 className="text-6xl font-poppins font-semibold text-primary">
                {title}
              </h1>
              <p className="mt-4 text-lg w-9/12 text-start">{subTitle}</p>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </div>
  );
};

export default HeroBannerSection;
