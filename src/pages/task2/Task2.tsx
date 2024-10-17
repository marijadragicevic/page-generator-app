import React from 'react';

import { getUserList } from '@homework-task/api/api';
import { List } from '@homework-task/components/List';
import { DefaultLayout } from '@homework-task/layout/DefaultLayout';
import {
    Accent,
    StyledBackgroundLight,
    StyledDescription,
    StyledHeader,
    TextBackground,
} from '@homework-task/layout/styled';
import { ColDefType, UserType } from '@homework-task/types/interfaces';

// list definition
const colDefs: ColDefType[] = [
    {
        headerName: 'User Id',
        fieldName: 'id',
    },
    {
        headerName: 'Name',
        fieldName: 'name',
    },
    {
        headerName: 'Username',
        fieldName: 'username',
    },
    {
        headerName: 'Email',
        fieldName: 'email',
    },
    {
        headerName: 'Phone',
        fieldName: 'phone',
    },
];

export const Task2 = () => {
    return (
        <DefaultLayout>
            <StyledBackgroundLight sx={{ flexDirection: 'column' }}>
                <TextBackground elevation={5}>
                    <StyledHeader variant="h4">
                        <Accent>#2</Accent>
                        Create list component
                    </StyledHeader>
                </TextBackground>
                <List<UserType> getList={getUserList} colDefs={colDefs} />
            </StyledBackgroundLight>
        </DefaultLayout>
    );
};
