import React, { ReactNode } from 'react';

import { Loading } from '@homework-task/components/Loading';
import { Navbar } from '@homework-task/components/Navbar';
import { PagePanel } from '@homework-task/components/PagePanel';
import { Grid } from '@mui/material';

export const DefaultLayout: React.FC<{
    children?: ReactNode;
    isLoading?: boolean;
    isError?: boolean;
}> = ({ children, isLoading, isError }) => {
    return (
        <Grid display="flex" height="100svh">
            {isLoading && <Loading />}
            <Navbar />
            <PagePanel>{children}</PagePanel>
        </Grid>
    );
};
