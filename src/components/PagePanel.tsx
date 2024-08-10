import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

const PagePanelBox = styled(Box)(({ theme }) => ({
    padding: 50,
    flexGrow: 1,
    backgroundColor: '#E6E6EA',

    '& .MuiPaper-root': {
        color: '#fff',
        '& svg ': {
            color: '#fff',
        },
    },
}));

export const PagePanel: React.FC<{ children: ReactNode }> = ({ children }) => {
    return <PagePanelBox>{children}</PagePanelBox>;
};
