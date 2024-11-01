import React from 'react'
import Link from 'next/link'

const Button = ({
  variant,
  href,
  label
}: {
  variant: 'primary' | 'secondary' | 'tertiary',
  href: string,
  label: string
}
) => {
  const primaryClassName = "bg-buttonPrimary hover:bg-buttonSecondary text-primary font-bold py-2 px-4 rounded-full"
  const secondaryClassName = "bg-white border-buttonSecondary hover:bg-buttonSecondary text-secondary font-bold py-2 px-4 rounded-full"

  return (
    <Link href={href} className={variant === 'primary' ? primaryClassName : secondaryClassName}>
      {label}
    </Link>
  )
}

export default Button