'use client';

import React, { useState, useEffect } from 'react';

export default function ResourceDetailPage() {
    const [id, setId] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const pathParts = window.location.pathname.split('/');
            const resourceId = pathParts[pathParts.length - 1];
            setId(resourceId);
        }
    }, []);

    // --- Resource Mapping ---
    const resourceMap = {
        'dsa-cpp': {
            title: "DSA in C++ Roadmap",
            url: "https://chivalrous-hydrofoil-427.notion.site/The-COMPLETE-Data-Structures-Algorithms-Roadmap-2894a80d73c1801783b5eeceb084b33d"
        }
    };

    const renderContent = () => {
        if (!id) {
            return (
                <div className="flex items-center justify-center h-full absolute inset-0">
                    <p className="text-gray-400">Loading resource...</p>
                </div>
            );
        }

        const resource = resourceMap[id];

        if (resource) {
            if (typeof window !== 'undefined') {
                window.location.href = resource.url;
            }

            return (
                <div className="flex flex-col items-center justify-center h-full text-center">
                    <h1 className="text-2xl font-bold mb-2">Redirecting...</h1>
                    <p className="text-gray-400 mb-4">
                        Opening {resource.title}
                    </p>

                    {/* Fallback button */}
                    <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                    >
                        Open Manually
                    </a>
                </div>
            );
        }

        return (
            <div className="flex flex-col items-center justify-center h-full text-center p-4">
                <h1 className="text-3xl font-bold text-white mb-2">
                    Content Coming Soon!
                </h1>
                <p className="text-gray-400">
                    This resource is under construction.
                </p>
                <p className="text-yellow-500 mt-1">Resource ID: {id}</p>
            </div>
        );
    };

    return (
        <div className="bg-gray-900 min-h-screen text-white relative">
            {renderContent()}
        </div>
    );
}