import React from 'react';
import ElementItem from './ElementItem';
import Image from 'next/image';
import ContentWrapper from '../layout/ContentWrapper';

type ElementItemProps = {
  title: string;
  description: string;
};
type ElementsListProps = {
  title: string;
  image: string;
  items: ElementItemProps[];
  toggle?: boolean;
};

const ElementsList: React.FC<ElementsListProps> = ({
  title,
  image,
  items,
  toggle = false,
}) => {
  return (
    <ContentWrapper>
      <div
        className={`flex w-full flex-col items-center justify-center gap-14 lg:flex-row ${
          toggle && 'flex-col-reverse lg:flex-row-reverse'
        }`}
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-lg lg:w-1/2">
          <Image
            src={image}
            alt="Image"
            className="h-full w-full bg-primary bg-opacity-30 object-cover"
            fill
          />
        </div>
        <div className="mt-4 w-full lg:mt-0 lg:w-1/2">
          <h1 className="font-poppins text-2xl font-semibold text-primary md:text-4xl">
            {title}
          </h1>
          <ul>
            {items.map((item, index) => (
              <ElementItem key={index} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default ElementsList;
