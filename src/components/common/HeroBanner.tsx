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
    <section className="bg-gray-100 pt-20">
      <ContentWrapper>
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
          <div className="md:w-1/2">
            <h2 className="mb-4 text-3xl font-bold text-primary">{title}</h2>
            <p className="mb-6 text-lg">{subtitle}</p>
            <Button variant="tertiary" href={ctaLink} label={ctaText} />
          </div>
          <div className="mt-6 md:mt-0 md:w-1/2">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default HeroBanner;
