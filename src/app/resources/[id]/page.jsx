'use client'; // This directive can be kept for environments that support it.

import React, { useState, useEffect } from 'react';

// --- Main Component for Individual Resource Pages ---
export default function ResourceDetailPage() {
    // State to store the resource ID from the URL
    const [id, setId] = useState(null);

    // This effect runs on the client-side after the component mounts
    // to read the ID from the browser's URL.
    useEffect(() => {
        // Check if window is defined to ensure this code runs only in the browser
        if (typeof window !== 'undefined') {
            const pathParts = window.location.pathname.split('/');
            // The last part of the path should be the resource ID (e.g., 'dsa-cpp')
            const resourceId = pathParts[pathParts.length - 1];
            setId(resourceId);
        }
    }, []); // The empty array [] ensures this effect runs only once.

    // --- Content Rendering Logic ---
    const renderContent = () => {
        if (!id) {
            return (
                <div className="flex items-center justify-center h-full absolute inset-0">
                    <p className="text-gray-400">Loading resource...</p>
                </div>
            );
        }

        // --- Condition for the DSA C++ Notion Doc ---
        // Add more 'else if' blocks here for future resources
        if (id === 'dsa-cpp') {
            const notionEmbedUrl = "https://chivalrous-hydrofoil-427.notion.site/ebd/2894a80d73c1801783b5eeceb084b33d"; 

            return (
                <div className="w-full h-full">
                    {/* The iframe will embed your Notion document */}
                    <iframe
                        src={notionEmbedUrl}
                        className="w-full h-full absolute inset-0"
                        frameBorder="0"
                        allowFullScreen
                        title="DSA in C++ Notion Document"
                    ></iframe>
                </div>
            );
        }

        // --- Fallback for other resource IDs ---
        // This will be shown for links like /resources/frontend-toolkit until you add a condition for it
        return (
            <div className="flex flex-col items-center justify-center h-full absolute inset-0 text-center p-4">
                <h1 className="text-3xl font-bold text-white mb-2">Content Coming Soon!</h1>
                <p className="text-gray-400">This resource is currently under construction.</p>
                <p className="text-yellow-500 mt-1">Resource ID: {id}</p>
            </div>
        );
    };

    return (
        // This parent div ensures the page takes up the full screen height
        <div className="bg-gray-900 min-h-screen text-white relative">
            {renderContent()}
        </div>
    );
}

