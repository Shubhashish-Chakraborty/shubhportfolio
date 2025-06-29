'use client';
import { Redirecting } from '@/components/loader/Redirect';
import { useEffect } from 'react';

const PythonRedirect = () => {
    useEffect(() => {
        // Delay a bit just so the message can render
        const timer = setTimeout(() => {
            window.location.href =
                'https://chivalrous-hydrofoil-427.notion.site/GOLANG-2214a80d73c18004a5b7f38cb105e5e7';
        }, 100); // slight delay to ensure text renders

        return () => clearTimeout(timer);
    }, []);

    return <Redirecting />;
};

export default PythonRedirect;