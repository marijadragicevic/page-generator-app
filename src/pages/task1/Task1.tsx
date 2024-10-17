import React from 'react';

import { Grid } from '@mui/material';

import { DefaultLayout } from '@homework-task/layout/DefaultLayout';
import {
    Accent,
    StyledBackground,
    StyledButton,
    StyledDescription,
    StyledHeader,
    TextBackground,
} from '@homework-task/layout/styled';

export const Task1 = () => {
    return (
        <DefaultLayout>
            <StyledBackground elevation={5} sx={{ justifyContent: 'left' }}>
                <Grid sx={{ flex: '0 0 50%' }}>
                    <TextBackground elevation={5}>
                        <StyledHeader variant="h4">
                            <Accent>#1</Accent>
                            About the project
                        </StyledHeader>

                        <StyledDescription variant="body1">
                            Hi! Welcome to my Page Generator App. This app is
                            developed using React.js and TypeScript, following
                            ESLint and Prettier rules, and utilizing import
                            aliases for better code readability. The app focuses
                            on creating scalable and reusable components that
                            are later used for building the page UI. You can
                            find a link to the GitHub repository of the project
                            below. The <Accent>README.md</Accent> file will
                            provide more details about the project.
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
