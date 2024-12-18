import React from 'react';
import Image from 'next/image';
import ContentWrapper from '../layout/ContentWrapper';

const HeroBannerSection = ({
  title,
  subTitle,
  image,
  smallImage,
  toggle = false,
}: {
  title: string;
  subTitle: string;
  image: string;
  smallImage: string;
  toggle?: boolean;
}) => {
  return (
    <div className="relative h-full w-full">
      {/* Image */}
      <div className="absolute left-0 top-0 z-0 h-screen w-screen">
        <Image
          src={image}
          className="hidden object-cover object-center md:block"
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
          <div
            className={`relative ${toggle ? 'mr-auto' : 'ml-auto'} flex h-[75vh] w-full flex-col items-center justify-center md:w-1/2 md:items-end`}
          >
            <div>
              <h1 className="font-poppins text-center text-4xl font-semibold text-primary md:text-left md:text-6xl">
                {title}
              </h1>
              <p className="mx-auto mt-4 w-9/12 text-center text-base md:ml-0 md:text-left md:text-lg">
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
