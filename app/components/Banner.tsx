// banner component

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { ImageProps } from "@/types";
interface BannerProps {
  banner: {
    title: string;
    site: string;
    url: string;
    desktopImage: Pick<ImageProps, "url">;
    mobileImage: Pick<ImageProps, "url">;
  };
  className?: string;
  sticky?: boolean;
  border?: boolean;
}

export const Banner: React.FC<BannerProps> = ({
  banner: { title, site, url, desktopImage, mobileImage },
  className,
  sticky,
  border,
}) => {
  return (
    <div
      className={`flex justify-center min-h-[100px] w-full py-1.5 ${
        sticky ? "sticky top-0" : ""
      } ${border ? "xl:border" : ""} ${className || ""}`}
    >
      <Link href={url || "/"} target="_blank" className="flex relative">
        <img
          src={desktopImage?.url}
          alt={`${title} - ${site} - desktop`}
          className="hidden xl:block"
        />
        <img
          src={mobileImage?.url}
          alt={`${title} - ${site} - mobile`}
          className="block xl:hidden"
        />
      </Link>
    </div>
  );
};
