import React from 'react';

interface CardProps {
    title: string;
    amount: string | number;
    description: string;
}

const Card: React.FC<CardProps> = ({ title, amount, description }) => {
    return (
        <div className="w-full p-2 flex justify-center items-center border-2 border-second ">
            <div className="flex-1 pr-4">
                <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                    {title}
                </p>
                <p className="mb-0 dark:text-white dark:opacity-60">{description}</p>
            </div>
            <div className="flex justify-center items-center m-2 p-1">
                <h5 className="mb-2 font-bold text-xl dark:text-white">{amount}</h5>
            </div>
        </div>
    );
};

export default Card;
