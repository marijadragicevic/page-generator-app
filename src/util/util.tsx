import React from 'react';

import { FormDefType } from '@homework-task/types/interfaces';
import { TextField } from '@mui/material';
import {
    FieldErrors,
    FieldValues,
    Path,
    UseFormRegister,
} from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

export const renderForm = <T extends FieldValues>(
    formDef: FormDefType[],
    register: UseFormRegister<T>,
    errors: FieldErrors<T>
) => {
    const isFormDefPresent = formDef.length > 0;

    return (
        isFormDefPresent &&
        formDef.map((field) => {
            const name = field.name as Path<T>;
            const errorMessage = errors[field.name as keyof T]?.message as
                | string
                | undefined;

            if (field.type === 'textarea') {
                return (
                    <TextField
                        {...register(name)}
                        key={uuidv4()}
                        variant="outlined"
                        placeholder={field.placeholder}
                        type={field.type}
                        fullWidth
                        id={field.name}
                        name={field.name}
                        error={!!errors[field.name]}
                        helperText={errorMessage}
                        color="primary"
                        label={field.name}
                        multiline
                        maxRows={10}
                        rows={5}
                    />
                );
            } else {
                return (
                    <TextField
                        {...register(name)}
                        key={uuidv4()}
                        variant="outlined"
                        placeholder={field.placeholder}
                        type={field.type}
                        fullWidth
                        id={field.name}
                        name={field.name}
                        error={!!errors[field.name]}
                        helperText={errorMessage}
                        color="primary"
                        label={field.name}
                    ></TextField>
                );
            }
        })
    );
};
