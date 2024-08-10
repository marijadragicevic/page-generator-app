import React from 'react';

import { List } from '@homework-task/components/List';
import { DefaultLayout } from '@homework-task/layout/DefaultLayout';
import { StyledBackgroundLight } from '@homework-task/layout/styled';
import { ColDefType } from '@homework-task/types/interfaces';

const colDefs: ColDefType[] = [
    {
        fieldName: '',
        headerName: '',
    },
];

export const Task2 = () => {
    return (
        <DefaultLayout>
            <StyledBackgroundLight>
                <List getList={() => {}} colDefs={colDefs} />
            </StyledBackgroundLight>
        </DefaultLayout>
    );
};
