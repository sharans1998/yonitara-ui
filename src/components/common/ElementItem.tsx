import React from 'react';

type ElementItemProps = {
  title: string;
  description: string;
};

const ElementItem = ({ title, description }: ElementItemProps) => {
  return (
    <div className="my-4">
      <p className="flex items-center">
        <img src="/logo-icon.svg" alt="ul" className="mr-2 h-3 w-3" />
        <span className="font-medium">{title}</span>
      </p>
      <p className="ml-5 text-gray">{description}</p>
    </div>
  );
};

export default ElementItem;
