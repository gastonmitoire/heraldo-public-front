// banner component

import { Image } from "@/types";
import React from "react";

interface BannerProps {
  banner: {
    title: string;
    site: string;
    url?: string;
    desktopImage?: Pick<Image, "url">;
    mobileImage?: Pick<Image, "url">;
  };
  className?: string;
  sticky?: boolean;
  border?: boolean;
  imageWidth?: number | string;
  imageHeight?: number | string;
  key?: string;
}

export const Banner: React.FC<BannerProps> = ({
  banner: { title, site, url, desktopImage, mobileImage },
  className,
  sticky,
  border,
  imageWidth,
  imageHeight,
  key
}) => {
  return (
    <div
      key={key}
      className={`${className} flex justify-center min-h-[100px] w-full py-1.5 ${
        sticky ? "sticky top-0" : ""
      } ${border ? "border" : ""}`}
    >
      {desktopImage?.url || mobileImage?.url ? (
        <>
          <img
            src={desktopImage?.url}
            alt={`${title} - ${site} - desktop`}
            width={imageWidth}
            height={imageHeight}
            className="hidden md:block"
          />
          <img
            src={mobileImage?.url}
            alt={`${title} - ${site} - mobile`}
            width={imageWidth}
            height={imageHeight}
            className="md:hidden"
          />
        </>
      ) : (
        <img
          src={url}
          alt={`${title} - ${site}`}
          width={imageWidth}
          height={imageHeight}
        />
      )}
    </div>
  );
};
