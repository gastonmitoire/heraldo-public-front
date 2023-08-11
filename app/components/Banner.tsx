// banner component

import React, { Suspense } from "react";
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
      <Suspense fallback={<div>Cargando publicidad...</div>}>
        <Link href={url || "/"} target="_blank" className="flex relative">
          <Image
            src={desktopImage?.url}
            alt={`${title} - ${site} - desktop`}
            width={960}
            height={100}
            className="hidden xl:block"
          />
          <Image
            src={mobileImage?.url}
            alt={`${title} - ${site} - mobile`}
            width={450}
            height={250}
            className="block xl:hidden"
          />
        </Link>
      </Suspense>
    </div>
  );
};
