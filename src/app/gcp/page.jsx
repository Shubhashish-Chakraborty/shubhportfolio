'use client';
import { Redirecting } from '@/components/loader/Redirect';
import { useEffect } from 'react';

const GCPRedirect = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href =
                'https://github.com/Shubhashish-Chakraborty/swarm-external-secrets/blob/fix/gcp-provider/providers/GCP_GUIDE.md';
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return <Redirecting />;
};

export default GCPRedirect;