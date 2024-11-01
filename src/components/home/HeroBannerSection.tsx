import React from 'react';
import Image from 'next/image';
import HeroTitle from './HeroTitle';
import ContentWrapper from '../layout/ContentWrapper';

const HeroBannerSection = () => {
  return (
    <div className="w-full h-full relative">
      {/* Image */}

      {/* Text and Title */}
      <div className="absolute z-10">
        <ContentWrapper>
          <div className="h-full w-1/2 ml-auto flex flex-col justify-center items-end relative">
            <HeroTitle title="Empowering With" />
            <HeroTitle title="Informed Choices" />
            <p className="mt-4 text-lg">
              Wombs intelligence to heal and empower/ holistic womb intelligence
            </p>
          </div>
        </ContentWrapper>
      </div>
    </div>
  );
};

export default HeroBannerSection;
