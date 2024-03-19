'use client';

import React from 'react';

type ButtonProps ={
    children: React.ReactNode,
    action?: () => void
    type?: 'submit' | 'button'
    variant?: 'primary' | 'secondary'| 'mine' | 'link' | 'destructive'
    size?: 'default' | 'small' | 'large' |'icon' | 'link'
}

const Button:React.FC<ButtonProps> = ({
  children, action, type, variant = 'mine', size = 'default',
}) => (

  <button
    type={type || undefined}
    onClick={() => { action ? action() : null; }}
    className={`
    gap-2
inline-flex items-center justify-center whitespace-nowrap w-full text-white rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
${variant === 'primary' && 'bg-primary text-white'}
${variant === 'secondary' && 'bg-secondary text-color-text hover:bg-secondary/50p-2 items-center hover:text-white hover:rounded-md hover:bg-form-color '}
${variant === 'mine' && 'border-2 border-black'}
${variant === 'link' && 'text-black underline-offset-4 hover:underline'}
${variant === 'destructive' && ' bg-rose-500 text-white hover:bg-rose-600/25'}
${size === 'default' && 'h-10 px-4 py-2'}
${size === 'link' && 'h-9 p-0 m-0'}
${size === 'small' && 'h-9 rounded-md px-3'}
${size === 'large' && 'h-11 rounded-md px-8'}
${size === 'icon' && 'h-10 w-10'}
    `}
  >
    {children}
  </button>
);

export default Button;
