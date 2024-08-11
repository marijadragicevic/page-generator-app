import React from 'react';

import { Loading } from '@homework-task/components/Loading';
import { useAsyncService } from '@homework-task/hooks/useAsyncService';
import { StyledButton, StyledPaper } from '@homework-task/layout/styled';
import { CreateFormProps } from '@homework-task/types/interfaces';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FieldValues } from 'react-hook-form';

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
        <StyledPaper>
            <form
                style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '20px',
                }}
                onSubmit={handleSubmit(handleFormSubmit)}
            >
                {renderForm(register, errors)}
                <StyledButton
                    type="submit"
                    variant="contained"
                    disabled={isLoading}
                >
                    {isLoading ? <Loading /> : 'Submit'}
                </StyledButton>
            </form>
        </StyledPaper>
    );
};

export default CreateForm;
