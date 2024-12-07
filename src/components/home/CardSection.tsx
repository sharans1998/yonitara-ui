import React from 'react';
import Card, { CardProps } from './Card';

const CardSection = ({
  title,
  subTitle,
  cards,
}: {
  title: string;
  subTitle: string;
  cards: CardProps[];
}) => {
  return (
    <div className="my-12 flex flex-col items-center">
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
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
