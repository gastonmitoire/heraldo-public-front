// banner component

import React from "react";

interface BannerProps {
  url: string;
  title: string;
  className?: string;
  sticky?: boolean;
}

export const Banner: React.FC<BannerProps> = ({
  url,
  title,
  className,
  sticky,
}) => {
  return (
    <div
      className={`${className} flex justify-center min-h-[100px] w-full border py-1.5 ${
        sticky ? "sticky top-0" : ""
      }`}
    >
      <img src={url} alt={title} />
    </div>
  );
};
