import React from 'react';

import { ItemShowcaseProps } from '@homework-task/types/interfaces';
import { v4 as uuidv4 } from 'uuid';

export const ItemsShowcase = ({ items }: ItemShowcaseProps) => {
    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 gap-8 w-8/12">
                {items.map(({ title, description }) => (
                    <div key={uuidv4()} className="flex flex-col gap-2">
                        <img
                            src="/media/checkmark.jpg"
                            width={25}
                            alt="Checkmark"
                        />
                        <div className="text-2xl font-bold">{title}</div>
                        <p className="">{description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
