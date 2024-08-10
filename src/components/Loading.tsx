import React, { useEffect, useState } from 'react';
import { Box, LinearProgress } from '@mui/material';

export const Loading = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setProgress(100);
        }, 500);
    }, []);

    return (
        <Box sx={{ width: '100%', position: 'absolute', zIndex: 1202 }}>
            <LinearProgress
                variant="determinate"
                value={progress}
                sx={{ height: 6 }}
            />
        </Box>
    );
};
