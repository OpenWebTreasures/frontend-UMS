// ButtonComponent.tsx

import React, { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    type: 'button' | 'submit' | 'reset' | 'cancel';
    propButtonClass?: null | string;
    additionalClass?: null | string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type, propButtonClass, additionalClass }) => {
    let buttonClass = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full';

    if (propButtonClass == null) {
        if (type === 'submit') {
            buttonClass = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full border-2 border-blue-500';
        } else if (type === 'reset') {
            buttonClass = 'bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full border-2 border-grey-500';
        } else if (type === 'cancel') {
            buttonClass = 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full border-2 border-red-500';
        }
    }

    return (
        <button
            type={type === 'submit' ? 'submit' : 'button'}
            className={buttonClass + " " + additionalClass}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
