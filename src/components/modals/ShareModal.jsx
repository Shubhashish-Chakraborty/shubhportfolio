"use client";

import { useState } from "react";
import { LinkIcon } from "@/icons/Link";
import { XIcon } from "@/icons/XIcon";

export const ShareModal = ({ link, onClose }) => {
    const [copied, setCopied] = useState(false);
    const fullLink = `https://yourwebsite.com${link}`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(fullLink).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        });
    };
    
    // Stop propagation to prevent closing modal when clicking inside
    const handleModalContentClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={onClose} // Close modal when clicking on the backdrop
        >
            <div 
              className="bg-gray-800 rounded-xl shadow-2xl p-6 w-full max-w-md border border-gray-700"
              onClick={handleModalContentClick}
            >
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white">Share this Resource</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">
                        <XIcon />
                    </button>
                </div>
                <p className="text-gray-400 mb-4">Share this link via</p>
                <div className="flex space-x-4 mb-6">
                    {/* Add more social share links as needed */}
                    <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(fullLink)}`} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 transition-colors">
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.908 6.161l-1.317 4.814 4.905-1.294z"/></svg>
                    </a>
                    <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(fullLink)}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.215 3.793 4.653-.54.147-1.116.199-1.697.063.633 1.944 2.434 3.292 4.545 3.328-1.745 1.366-3.863 2.083-6.102 1.732 2.123 1.365 4.636 2.162 7.338 2.162 8.807 0 13.614-7.29 13.409-13.437.933-.671 1.743-1.512 2.384-2.482z"/></svg>
                    </a>
                </div>
                <div className="flex items-center space-x-2 p-2 bg-gray-900 rounded-lg">
                    <LinkIcon className="text-gray-400" />
                    <input type="text" readOnly value={fullLink} className="bg-transparent text-gray-300 flex-grow outline-none"/>
                    <button 
                        onClick={copyToClipboard} 
                        className="bg-yellow-500 text-gray-900 font-bold py-1 px-3 rounded-md hover:bg-yellow-400 transition-colors text-sm"
                    >
                        {copied ? 'Copied!' : 'Copy'}
                    </button>
                </div>
            </div>
        </div>
    );
};