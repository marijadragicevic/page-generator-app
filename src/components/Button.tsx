import clsx from 'clsx';
import React from 'react';
import { ButtonProps } from '@homework-task/types/interfaces';

export const Button = ({ children, onClick, className }: ButtonProps) => {
    return (
        <button
            className={clsx(
                'rounded-lg',
                'px-4',
                'py-2',
                'bg-black',
                'text-white',
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
