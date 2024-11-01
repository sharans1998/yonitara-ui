import React from 'react';
import Image from 'next/image';
import ContentWrapper from '../layout/ContentWrapper';

const HeroBannerSection = ({
  title,
  subTitle,
  image,
  smallImage,
}: {
  title: string;
  subTitle: string;
  image: string;
  smallImage: string;
}) => {
  return (
    <div className="w-full h-full relative">
      {/* Image */}
      <div className="h-screen w-screen z-0 absolute top-0 left-0">
        <Image
          src={image}
          className="object-cover object-center hidden md:block"
          alt="Hero Banner"
          fill
        />
        <Image
          src={smallImage}
          className="object-cover object-center md:hidden"
          alt="Hero Banner"
          fill
        />
      </div>

      {/* Text and Title */}
      <div className="absolute z-10 w-full">
        <ContentWrapper>
          <div className="h-[75vh] w-full md:w-1/2 ml-auto flex flex-col justify-center items-center md:items-end relative">
            <div>
              <h1 className="text-4xl md:text-6xl font-poppins font-semibold text-primary text-center md:text-left">
                {title}
              </h1>
              <p className="mt-4 text-base md:text-lg w-9/12 text-center md:text-left mx-auto md:ml-0">
                {subTitle}
              </p>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </div>
  );
};

export default HeroBannerSection;
