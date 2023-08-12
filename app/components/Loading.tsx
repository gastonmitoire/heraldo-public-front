// loading component

import React from "react";

interface LoadingProps {
  className?: string;
  text?: string;
}

export const Loading: React.FC<LoadingProps> = ({ className, text }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      <p className="text-primary font-bold text-xl pt-3">{text}</p>
    </div>
  );
};
