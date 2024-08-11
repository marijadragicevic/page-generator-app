import React from 'react';

import { LayoutProps } from '@homework-task/types/interfaces';
import clsx from 'clsx';

export const Layout = ({ children, background }: LayoutProps) => {
    return <section className={clsx('py-20', background)}>{children}</section>;
};
