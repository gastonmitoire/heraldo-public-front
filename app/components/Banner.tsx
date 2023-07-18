// banner component

import React from "react";

interface BannerProps {
  url: string;
  title: string;
  className?: string;
}

export const Banner: React.FC<BannerProps> = ({ url, title, className }) => {
  return (
    <div className={`${className} flex justify-center min-h-[100px] w-full`}>
      <img src={url} alt={title} />
    </div>
  );
};
