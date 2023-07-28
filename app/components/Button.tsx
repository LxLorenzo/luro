'use client'

import React, { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

import { RevealWrapper } from 'next-reveal'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'default' | 'black'
}

const Button = ({ className, variant = 'default', ...props }: ButtonProps) => {
  const variantClasses = {
    default: 'bg-white text-zinc-900 hover:bg-zinc-900 hover:text-white',
    black:
      'bg-transparent border border-zinc-600 hover:bg-white hover:text-zinc-900',
  }

  const _className = twMerge(
    variantClasses[variant],
    'py-3 px-6 text-sm md:text-text-base lg:text-lg font-medium shadow transition-all leading-4 tracking-wide',
    className,
  )

  return (
    <RevealWrapper delay={190} origin="bottom" duration={1000} distance="80px">
      <button className={_className} {...props}>
        {props.children}
      </button>
    </RevealWrapper>
  )
}

export default Button
