import React from 'react';

import { DefaultLayout } from '@homework-task/layout/DefaultLayout';
import { NoDataBox, StyledBackground } from '@homework-task/layout/styled';
import { Typography } from '@mui/material';

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
