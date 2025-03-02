// FillOut Embed
'use client';
import React from 'react';
import { FilloutStandardEmbed } from '@fillout/react';
import '@fillout/react/style.css';

const NameEmailPhoneForm = () => {
  return (
    <div className="flex h-[450px] w-full items-center justify-center md:h-[400px] lg:h-96">
      <FilloutStandardEmbed filloutId="bLpqKfQVDZus" />
    </div>
  );
};

export default NameEmailPhoneForm;
