import React from 'react';
import Image from 'next/image';
import ContentWrapper from '../layout/ContentWrapper';
import Button from './Button';

type HeroBannerProps = {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  ctaText: string;
  ctaLink: string;
};

const HeroBanner = ({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  ctaText,
  ctaLink,
}: HeroBannerProps) => {
  return (
    <div className="relative h-full w-full">
      <ContentWrapper>
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
          <div className="w-full px-4 md:w-1/2 lg:px-0">
            <h2 className="mb-4 text-3xl font-bold text-primary">{title}</h2>
            <p className="mb-6 text-sm lg:text-lg">{subtitle}</p>
            <Button variant="tertiary" href={ctaLink} label={ctaText} />
          </div>
          <div className="relative mt-6 aspect-video w-full md:mt-0 md:w-1/2">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
