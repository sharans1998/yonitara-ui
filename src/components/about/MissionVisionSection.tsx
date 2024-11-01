import React from 'react';
import ContentWrapper from '../layout/ContentWrapper';

const MissionVisionSection = ({
  mission,
  vision,
}: {
  mission: string;
  vision: string;
}) => {
  return (
    <ContentWrapper>
      <div className="flex flex-col items-center justify-center gap-28 ">
        <div className="flex">
          <div className="w-5/12">
            <h2 className="text-4xl font-bold text-primary">Our Mission</h2>
            <p className="text-lg">{mission}</p>
          </div>
        </div>
        <div className="flex">
          <div className="w-5/12 ml-auto">
            <h2 className="text-4xl font-bold text-primary">Our Vision</h2>
            <p className="text-lg">{vision}</p>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default MissionVisionSection;
