import React from 'react';

import { Typography } from '@mui/material';

import { DefaultLayout } from '@homework-task/layout/DefaultLayout';
import { NoDataBox, StyledBackground } from '@homework-task/layout/styled';

export const NotFound = () => {
    return (
        <DefaultLayout>
            <StyledBackground>
                <NoDataBox elevation={5}>
                    <Typography variant="h4">Not Found</Typography>
                </NoDataBox>
            </StyledBackground>
        </DefaultLayout>
    );
};
