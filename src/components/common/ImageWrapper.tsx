'use client';
import { CldImage } from 'next-cloudinary';
import React from 'react';

const ImageWrapper = ({
  src,
  alt,
  ...props
}: {
  src: string;
  alt: string;
  props?: React.ComponentProps<typeof CldImage>;
}) => {
  return <CldImage src={src} alt={alt} {...props} fill />;
};

export default ImageWrapper;
