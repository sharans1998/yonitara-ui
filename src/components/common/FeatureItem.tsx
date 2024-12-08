import React from 'react';

type FeatureItemProps = {
  title: string;
  description: string;
  icon: string;
};
const FeatureItem = ({ title, description, icon }: FeatureItemProps) => {
  return (
    <div className="flex w-1/3 flex-col items-center">
      <img src={icon} alt={`${title} icon`} className="mb-4 h-16 w-16" />
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default FeatureItem;
