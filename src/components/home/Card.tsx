// components/Card.tsx
import React from 'react';
import Button from '../common/Button';

export interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  route?: string;
}

const Card = ({ icon, title, description, route }: CardProps) => {
  return (
    <div className="flex flex-col items-center gap-5 rounded-lg bg-[#f5e7fc] p-6 text-center shadow-md">
      <div className="mb-4 text-4xl">{icon}</div>
      <h3 className="mb-2 text-xl font-bold text-primary">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <Button variant="tertiary" href={route || '#'} label="Learn More" />
    </div>
  );
};

export default Card;
