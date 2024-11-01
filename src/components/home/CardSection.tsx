// components/CardSection.tsx
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
    <div className="mx-auto px-4 h-screen flex flex-col justify-center">
      {title && (
        <h2 className="text-4xl font-semibold text-center text-primary mb-4">
          {title}
        </h2>
      )}
      {subTitle && (
        <p className="text-lg text-center text-gray-600 w-1/2 mx-auto mb-8">
          {subTitle}
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
