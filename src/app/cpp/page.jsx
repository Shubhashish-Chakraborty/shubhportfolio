'use client';
import { Redirecting } from '@/components/loader/Redirect';
import { useEffect } from 'react';

const PythonRedirect = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href =
                'https://chivalrous-hydrofoil-427.notion.site/C-Complete-Course-HandBook-26f4a80d73c1807fa72efb65852af388';
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return <Redirecting />;
};

export default PythonRedirect;