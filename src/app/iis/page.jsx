'use client';
import { Redirecting } from '@/components/loader/Redirect';
import { useEffect } from 'react';

const GoRedirect = () => {
    useEffect(() => {
        // Delay a bit just so the message can render
        const timer = setTimeout(() => {
            window.location.href =
                'https://iiscode.vercel.app';
        }, 100); // slight delay to ensure text renders

        return () => clearTimeout(timer);
    }, []);

    return <Redirecting />;
};

export default GoRedirect;