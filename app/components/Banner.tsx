// banner component

import React from "react";

interface BannerProps {
  url: string;
  title: string;
  className?: string;
  sticky?: boolean;
  border?: boolean;
  imageWidth?: number | string;
  imageHeight?: number | string;
}

export const Banner: React.FC<BannerProps> = ({
  url,
  title,
  className,
  sticky,
  border,
  imageWidth,
  imageHeight,
}) => {
  return (
    <div
      className={`${className} flex justify-center min-h-[100px] w-full py-1.5 ${
        sticky ? "sticky top-0" : ""
      } ${border ? "border" : ""}`}
    >
      <img src={url} alt={title} width={imageWidth} height={imageHeight} />
    </div>
  );
};
