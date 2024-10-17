import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FieldValues } from 'react-hook-form';

import { Loading } from '@homework-task/components/Loading';
import { useAsyncService } from '@homework-task/hooks/useAsyncService';
import {
    StyledButton,
    StyledForm,
    StyledPaper,
} from '@homework-task/layout/styled';
import { CreateFormProps } from '@homework-task/types/interfaces';

export const CreateForm = <T extends FieldValues>({
    validationSchema,
    renderForm,
    onSubmit,
}: CreateFormProps<T>) => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<T>({
        resolver: zodResolver(validationSchema),
    });

    const { isLoading, fetchData } = useAsyncService();

    const handleFormSubmit = async (data: T) => {
        await fetchData(() => onSubmit(data));
    };

    return (
        <StyledPaper
            elevation={5}
            sx={{ height: 'auto', minHeight: '50%', maxHeight: '80%' }}
        >
            <StyledForm
                onSubmit={(e) => {
                    const response = handleSubmit(handleFormSubmit);
                    void response(e);
                }}
            >
                {renderForm(register, errors)}
                <StyledButton
                    type="submit"
                    variant="contained"
                    disabled={isLoading}
                >
                    {isLoading ? <Loading /> : 'Submit'}
                </StyledButton>
            </StyledForm>
        </StyledPaper>
    );
};

export default CreateForm;
