import React from 'react';

import { DefaultLayout } from '@homework-task/layout/DefaultLayout';
import {
    Accent,
    StyledBackground,
    StyledButton,
    StyledDescription,
    StyledHeader,
    TextBackground,
} from '@homework-task/layout/styled';
import { Grid } from '@mui/material';

export const Task1 = () => {
    return (
        <DefaultLayout>
            <StyledBackground elevation={5} sx={{ justifyContent: 'left' }}>
                <Grid sx={{ flex: '0 0 50%' }}>
                    <TextBackground elevation={5}>
                        <StyledHeader variant="h4">
                            <Accent>#1</Accent>
                            Transfer the project to TypeScript
                        </StyledHeader>

                        <StyledDescription variant="body1">
                            Hi! Whole project is translated to TypeScript. Here
                            you can find a link to the GitHub repo of the
                            project. There will be present{' '}
                            <Accent>README.md</Accent> file with more details
                            about tasks.
                        </StyledDescription>
                    </TextBackground>
                    <StyledButton
                        variant="contained"
                        size="large"
                        href="https://github.com/marijadragicevic/marija-dragicevic-fatcat-task"
                        target="_blank"
                    >
                        View source code
                    </StyledButton>
                </Grid>
            </StyledBackground>
        </DefaultLayout>
    );
};
