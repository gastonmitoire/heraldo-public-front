"use client";

import React, { useState, useEffect } from "react";

interface AdServerFooterProps {
  children: React.ReactNode;
}

export const AdServerFooter: React.FC<AdServerFooterProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const [showAdServer, setShowAdServer] = useState(true);

  const close = () => {
    setShowAdServer(false);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!showAdServer) return null;

  return (
    <div className="fixed bottom-0 flex justify-center w-full z-50 bg-opacity-90">
      <div className="relative grid place-items-center h-full">
        <button
          className="absolute top-1.5 right-0 z-50 bg-white hover:bg-gray-300 rounded-full"
          onClick={close}
        >
          <svg
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
          >
            <path
              d="M6 18L18 6M6 6l12 12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};
