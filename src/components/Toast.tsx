import {
    Alert,
    AlertColor,
    AlertTitle,
    Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

interface ToastProps {
    severity: AlertColor;
    title: 'Success' | 'Error';
    body: string;
}

const Toast = ({ body, title, severity }: ToastProps) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setIsVisible(false), 3000);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <>
            {isVisible ? (
                <Alert severity={severity}>
                    <AlertTitle>{title}</AlertTitle>
                    <Typography variant='body1'>{body}</Typography>
                </Alert>
            ) : null}
        </>
    );
};

export default Toast;
