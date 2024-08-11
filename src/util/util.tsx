import React from 'react';

import { FormDefType } from '@homework-task/types/interfaces';
import { TextField } from '@mui/material';

export const renderForm = (formDef: FormDefType[], register, errors) => {
    const isFormDefPresent = formDef.length > 0;

    return (
        isFormDefPresent &&
        formDef.map((field, index) => {
            if (field.type === 'textarea') {
                return (
                    <TextField
                        {...register(field?.name)}
                        key={index}
                        variant="outlined"
                        placeholder={field.placeholder}
                        type={field.type}
                        fullWidth
                        id={field.name}
                        name={field.name}
                        error={!!errors[field.name]}
                        helperText={
                            !!errors[field.name] && errors[field.name].message
                        }
                        color="primary"
                        label={field.name}
                        multiline
                        rows={10}
                    />
                );
            } else {
                return (
                    <TextField
                        {...register(field?.name)}
                        key={index}
                        variant="outlined"
                        placeholder={field.placeholder}
                        type={field.type}
                        fullWidth
                        id={field.name}
                        name={field.name}
                        error={!!errors[field.name]}
                        helperText={
                            !!errors[field.name] && errors[field.name].message
                        }
                        color="primary"
                        label={field.name}
                    ></TextField>
                );
            }
        })
    );
};
