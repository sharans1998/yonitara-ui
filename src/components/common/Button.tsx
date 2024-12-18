import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

const Button = ({
  variant,
  href,
  label,
}: {
  variant: 'primary' | 'secondary' | 'tertiary';
  href: string;
  label: string;
}) => {
  return (
    <Link
      href={href}
      className={clsx(
        'rounded-full px-8 py-2',
        variant === 'primary' &&
          'bg-buttonPrimary font-bold text-primary hover:bg-buttonSecondary',
        variant === 'secondary' &&
          'border-buttonSecondary bg-white font-bold text-secondary hover:bg-buttonSecondary',
        variant === 'tertiary' &&
          'border-2 border-primary bg-primary font-bold text-white hover:bg-[#f5e7fc] hover:text-primary'
      )}
    >
      {label}
    </Link>
  );
};

export default Button;
