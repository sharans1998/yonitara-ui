import React from 'react';
import ElementItem from './ElementItem';

type ElementItemProps = {
  title: string;
  description: string;
};
type ElementsListProps = {
  title: string;
  image: string;
  items: ElementItemProps[];
  flexReverse?: boolean;
};

const ElementsList: React.FC<ElementsListProps> = ({
  title,
  image,
  items,
  flexReverse,
}) => {
  return (
    <div className={`flex ${flexReverse && 'flex-row-reverse'}`}>
      <div className="bg- min-h-96 flex-1 overflow-hidden rounded-lg bg-[#f5e7fc]">
        <img src={image} alt={`${title} image`} className="max-w-full" />
      </div>
      <div className="h-full flex-1 justify-between pl-5">
        {title && (
          <h2 className="mb-4 text-2xl font-semibold text-primary md:text-4xl">
            {title}
          </h2>
        )}
        <ul>
          {items.map((item, index) => (
            <ElementItem key={index} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ElementsList;
