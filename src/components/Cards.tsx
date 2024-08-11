import React from 'react';

import { Button } from '@homework-task/components/Button';
import { CardDetailsType, CardsProps } from '@homework-task/types/interfaces';
import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';

export const Cards = ({ cards }: CardsProps) => {
    return (
        <div className={clsx('flex', 'justify-center', 'items-center')}>
            <div className={clsx('grid', 'grid-cols-2', 'gap-8', 'w-8/12')}>
                {cards.map(
                    ({
                        title,
                        image,
                        description,
                        background,
                        onClick,
                        buttonText,
                    }: CardDetailsType) => (
                        <div
                            key={uuidv4()}
                            className={clsx('rounded-md', 'p-8', background)}
                        >
                            <img src={image} alt="Icon" width="120" />
                            <div className="my-8">
                                <div
                                    className={clsx(
                                        'text-2xl',
                                        'font-bold',
                                        'mb-2'
                                    )}
                                >
                                    {title}
                                </div>
                                <div className={clsx('text-xl')}>
                                    {description}
                                </div>
                            </div>
                            <Button onClick={onClick}>{buttonText}</Button>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};
