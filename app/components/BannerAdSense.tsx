"use client";
import React from "react";
import Script from "next/script";

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
      className={`${className} hidden justify-center min-h-[100px] w-full py-1.5 ${
        sticky ? "sticky top-0" : ""
      } ${border ? "border" : ""}`}
    >
      {isMounted && 
      <>
      <Script
            id="adsense-right"
            async
            onError={() => console.log("error adsense right")}
            strategy="afterInteractive"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4444443092309144"
            crossOrigin="anonymous"
          />
          <ins
            className="adsbygoogle"
            style={{display:'inline-block',width:'188px',height:'600px'}}
            data-ad-client="ca-pub-4444443092309144"
            data-ad-slot="1140012422"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
          </>}
    </div>
  );
};

export default BannerAdSense;
