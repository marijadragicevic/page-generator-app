import React from 'react';

import { PageSection } from '@homework-task/components/PageSection';
import { PageGeneratorProps } from '@homework-task/types/interfaces';
import { Grid } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

export const PageGenerator = ({ sections }: PageGeneratorProps) => {
    return (
        sections?.length > 0 &&
        sections?.map((section) => {
            return (
                <Grid key={uuidv4()}>
                    <PageSection section={section} />
                </Grid>
            );
        })
    );
};
