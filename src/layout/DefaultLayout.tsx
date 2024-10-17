import React, { ReactNode } from 'react';

import { Grid } from '@mui/material';

import { Navbar } from '@homework-task/components/Navbar';
import { PagePanel } from '@homework-task/components/PagePanel';

export const DefaultLayout: React.FC<{
    children?: ReactNode;
}> = ({ children }) => {
    return (
        <Grid display="flex" height="100svh">
            <Navbar />
            <PagePanel>{children}</PagePanel>
        </Grid>
    );
};
