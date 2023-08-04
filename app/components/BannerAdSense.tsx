"use client";
import React from "react";

interface BannerAdSenseProps {
  htmlContent: string;
  title?: string;
  className?: string;
  sticky?: boolean;
  border?: boolean;
  imageWidth?: number | string;
  imageHeight?: number | string;
}

const BannerAdSense: React.FC<BannerAdSenseProps> = ({
  className,
  border,
  htmlContent,
  imageWidth,
  imageHeight,
  title,
  sticky,
}) => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    console.log(htmlContent);
    
  }, []);
  return (
    <div
      className={`${className} flex justify-center min-h-[100px] w-full py-1.5 ${
        sticky ? "sticky top-0" : ""
      } ${border ? "border" : ""}`}
    >
      {isMounted && <div dangerouslySetInnerHTML={{ __html: htmlContent }} />}
    </div>
  );
};

export default BannerAdSense;
