import Image from 'next/image';
import React from 'react';

type ElementItemProps = {
  title: string;
  description: string;
};

const ElementItem = ({ title, description }: ElementItemProps) => {
  return (
    <div className="my-4">
      <p className="flex items-center">
        <Image
          src="https://sharans1998.github.io/yonitara-ui/logo-icon.svg"
          alt="ul"
          className="mr-2 h-3 w-3"
          width={12}
          height={12}
        />
        <span className="font-medium">{title}</span>
      </p>
      <p className="ml-5 text-sm text-gray">{description}</p>
    </div>
  );
};

export default ElementItem;
