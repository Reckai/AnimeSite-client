import React from 'react';

type ButtonProps ={
    children: React.ReactNode
    action?: () => void
    type?: 'submit' | 'button'
}


const Button:React.FC<ButtonProps> = ({children, action, type}) => {
    return (
        <button type={type? type : undefined } onClick={()=>{action? action() :  null}} className={'rounded-md flex  items-center justify-center h-10 w-full  cursor-pointer bg-primary  text-white'}>
            {children}
        </button>
    );
};

export default Button;
