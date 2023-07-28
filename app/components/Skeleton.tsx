// skeleton component

import React from "react";

interface SkeletonProps {
  className?: string;
  text?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className, text }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="animate-pulse h-full w-full bg-gray-200"></div>
      <p className="text-gray-200 font-bold text-xl pt-3">{text}</p>
    </div>
  );
};
