import React from 'react';

import Marquee from 'react-fast-marquee';
import { v4 as uuidv4 } from 'uuid';

import { TrustBarProps } from '@homework-task/types/interfaces';

export const TrustBar = ({ images }: TrustBarProps) => {
    return (
        <Marquee className="mt-10">
            {images.map((image) => (
                <img width={100} key={uuidv4()} src={image} className="mx-10" />
            ))}
        </Marquee>
    );
};
