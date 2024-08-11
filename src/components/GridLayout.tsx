import React from 'react';

import { StyledGridLayout } from '@homework-task/layout/styled';
import { LayoutProps } from '@homework-task/types/interfaces';

export const GridLayout = ({ children, background }: LayoutProps) => {
    return (
        <StyledGridLayout sx={{ background: background }}>
            {children}
        </StyledGridLayout>
    );
};
