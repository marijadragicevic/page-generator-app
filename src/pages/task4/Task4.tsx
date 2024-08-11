import React from 'react';

import { PageGenerator } from '@homework-task/components/PageGenerator';
import { pageUI } from '@homework-task/dummy data';
import { DefaultLayout } from '@homework-task/layout/DefaultLayout';
import { StyledBackground, StyledPaper } from '@homework-task/layout/styled';

export const Task4 = () => {
    return (
        <DefaultLayout>
            <StyledBackground sx={{ flexDirection: 'column' }}>
                <StyledPaper sx={{ width: '100%', height: '100%', padding: 0 }}>
                    <PageGenerator sections={pageUI} />
                </StyledPaper>
            </StyledBackground>
        </DefaultLayout>
    );
};
