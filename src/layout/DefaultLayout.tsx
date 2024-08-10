import React, { ReactNode } from 'react';

import { Navbar } from '@homework-task/components/Navbar';
import { PagePanel } from '@homework-task/components/PagePanel';
import { Grid } from '@mui/material';

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
