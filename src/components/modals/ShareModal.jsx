"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { LinkIcon } from "@/icons/Link";
import { XIcon } from "@/icons/XIcon";

export const ShareModal = ({ link, onClose }) => {
    const [copied, setCopied] = useState(false);
    const [mounted, setMounted] = useState(false);

    const fullLink = `https://imshubh.site${link}`;

    useEffect(() => setMounted(true), []);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(fullLink).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const handleModalContentClick = (e) => e.stopPropagation();

    const modalContent = (
        <div
            className="fixed inset-0 bg-black text-white-custom bg-opacity-70 flex items-center justify-center z-[9999] p-4"
            onClick={onClose}
        >
            <div
                className="bg-gray-800 rounded-xl shadow-2xl p-6 w-full max-w-md border border-gray-700"
                onClick={handleModalContentClick}
            >
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white">Share this Resource</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">
                        <XIcon className="w-5 h-5" />
                    </button>
                </div>

                <p className="text-gray-400 mb-4">Share this link via</p>

                <div className="flex space-x-4 mb-6">
                    <a
                        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(fullLink)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-10 text-green-400 hover:text-green-500" stroke="currentColor" fill="currentColor" viewBox="0 0 640 640"><path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"/></svg>
                    </a>

                    <a
                        href={`https://x.com/intent/tweet?url=${encodeURIComponent(fullLink)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-400 hover:text-gray-500 size-10" fill="currentColor" stroke="currentColor" viewBox="0 0 640 640"><path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z"/></svg>
                    </a>
                </div>

                <div className="flex items-center space-x-2 p-2 bg-gray-900 rounded-lg">
                    <LinkIcon className="text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        readOnly
                        value={fullLink}
                        className="bg-transparent text-gray-300 flex-grow outline-none"
                    />
                    <button
                        onClick={copyToClipboard}
                        className="bg-yellow-500 text-gray-900 font-bold py-1 px-3 rounded-md hover:bg-yellow-400 transition-colors text-sm"
                    >
                        {copied ? "Copied!" : "Copy"}
                    </button>
                </div>
            </div>
        </div>
    );

    return mounted ? createPortal(modalContent, document.body) : null;
};
