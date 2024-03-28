import React from 'react';
import { cn } from '../../utils';

export interface InputProps
     extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <div className={cn(' relative justify-center w-full h-10 bg-form-color border-[1px] border-form-color rounded text-color-text px-2 cursor-text hover:border-[1px] hover:border-primary ', className)}>
      <input
        type={type}
        className={'border-none bg-form-color outline-0 py-3 w-full h-full'}
        ref={ref}
        {...props}
      />
    </div>
  ),
);
Input.displayName = 'Input';

export { Input };
