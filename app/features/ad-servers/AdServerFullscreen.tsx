"use client";

import React, { useState, useEffect } from "react";

interface AdServerFullscreenProps {
  children: React.ReactNode;
}

export const AdServerFullscreen: React.FC<AdServerFullscreenProps> = ({
  children,
}) => {
  const [showAdServer, setShowAdServer] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowAdServer(false);
    }, 8000);
  }, []);

  if (!showAdServer) return null;

  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 z-50 w-full h-screen bg-white bg-opacity-90">
      <div className="grid place-items-center h-full">{children}</div>
    </div>
  );
};
