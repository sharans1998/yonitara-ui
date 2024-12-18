import React from 'react';
import FeatureItem from './FeatureItem';

type FeatureProps = {
  title?: string;
  subTitle?: string;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
};

const Features = ({ title, subTitle, features }: FeatureProps) => {
  return (
    <div className="flex w-full flex-col items-center gap-8">
      {title && (
        <h2 className="mb-4 text-center text-2xl font-semibold text-primary md:text-4xl">
          {title}
        </h2>
      )}
      {subTitle && (
        <p className="text-gray-600 mx-auto mb-8 w-full text-center text-base md:w-1/2 md:*:text-lg">
          {subTitle}
        </p>
      )}
      <div className="flex flex-col gap-8 md:flex-row">
        {features.map((feature, index) => (
          <FeatureItem key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;
