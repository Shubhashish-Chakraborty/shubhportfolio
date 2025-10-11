"use client";

import { HeartIcon } from "@/icons/Heart";
import { ShareIcon } from "@/icons/Share";
import React, { useState, useEffect } from "react";
import { ShareModal } from "../modals/ShareModal";

export const ResourceCard = ({ id, title, description, link, thumbnail, initialLikes }) => {
    // State for like status, getting initial value from localStorage
    const [isLiked, setIsLiked] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem(`liked-resource-${id}`) === 'true';
        }
        return false;
    });

    const [showShareModal, setShowShareModal] = useState(false);

    // Update localStorage when like status changes
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(`liked-resource-${id}`, isLiked);
        }
    }, [isLiked, id]);

    // NOTE: The like count here is static. For a real like count, you would
    // need a database and an API to fetch and update the count.
    const likeCount = initialLikes + (isLiked ? 1 : 0);

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };

    return (
        <div className="bg-gray-800 border text-white-custom border-gray-700 rounded-xl overflow-hidden flex flex-col shadow-lg hover:shadow-yellow-500/10 hover:-translate-y-1 transition-all duration-300">
            {/* Thumbnail */}
            <div className="h-48 bg-gray-700 flex items-center justify-center">
                <img src={thumbnail} alt={`${title} thumbnail`} className="w-full h-full object-cover" />
            </div>

            {/* Content */}
            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                {description && <p className="text-gray-400 text-sm flex-grow mb-4">{description}</p>}

                {/* Footer section */}
                <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-700">
                    <a href={link} className="bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-md hover:bg-yellow-400 transition-transform hover:scale-105">
                        Open
                    </a>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <button onClick={handleLikeClick} className="text-gray-400 hover:text-red-500 transition-colors">
                                <HeartIcon isLiked={isLiked} />
                            </button>
                            <span className="text-white font-medium text-sm">{likeCount}</span>
                        </div>
                        <button onClick={() => setShowShareModal(true)} className="text-gray-400 hover:text-yellow-500 transition-colors">
                            <ShareIcon />
                        </button>
                    </div>
                </div>
            </div>

            {showShareModal && <ShareModal link={link} onClose={() => setShowShareModal(false)} />}
        </div>
    );
};