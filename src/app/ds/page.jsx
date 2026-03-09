'use client';
import { Redirecting } from '@/components/loader/Redirect';
import { useEffect } from 'react';

const DSRedirect = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href =
                'https://chivalrous-hydrofoil-427.notion.site/Data_Structures_Practical_Output-31e4a80d73c1800f9171ca5dcb266d3b';
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return <Redirecting />;
};

export default DSRedirect;