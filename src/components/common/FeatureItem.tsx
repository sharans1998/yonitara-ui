import Image from 'next/image';
import React from 'react';

type FeatureItemProps = {
  title: string;
  description: string;
  icon: string;
};
const FeatureItem = ({ title, description, icon }: FeatureItemProps) => {
  return (
    <div className="flex flex-col items-center lg:w-1/3">
      <Image
        width={64}
        height={64}
        src={icon}
        alt={`${title} icon`}
        className="mb-4"
      />
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default FeatureItem;
