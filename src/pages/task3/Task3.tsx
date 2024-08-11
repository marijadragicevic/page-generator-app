import React from 'react';

import { addNewPost } from '@homework-task/api/api';
import { CreateForm } from '@homework-task/components/CreateForm';
import { DefaultLayout } from '@homework-task/layout/DefaultLayout';
import {
    Accent,
    StyledBackground,
    StyledHeader,
    TextBackground,
} from '@homework-task/layout/styled';
import { FormDefType } from '@homework-task/types/interfaces';
import { renderForm } from '@homework-task/util/util';
import { z } from 'zod';

const formDef: FormDefType[] = [
    {
        name: 'title',
        placeholder: 'Please enter title',
        type: 'text',
    },
    {
        name: 'body',
        placeholder: 'Please enter desctiption',
        type: 'textarea',
    },
];

const validationSchema = z.object({
    title: z
        .string()
        .trim()
        .min(1, 'Title is required')
        .max(50, 'Title is too long'),
    body: z
        .string()
        .trim()
        .min(1, 'Description is required')
        .max(200, 'Description is too long'),
});

type ValidationSchemaType = z.infer<typeof validationSchema>;

export const Task3 = () => {
    return (
        <DefaultLayout>
            <StyledBackground sx={{ flexDirection: 'column' }}>
                <TextBackground elevation={5}>
                    <StyledHeader variant="h4">
                        <Accent>#3</Accent>
                        Generate form component
                    </StyledHeader>
                </TextBackground>
                <CreateForm<ValidationSchemaType>
                    validationSchema={validationSchema}
                    onSubmit={addNewPost}
                    renderForm={(register, errors) =>
                        renderForm(formDef, register, errors)
                    }
                />
            </StyledBackground>
        </DefaultLayout>
    );
};
