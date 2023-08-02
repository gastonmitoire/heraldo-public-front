'use client';
import React from 'react'

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
  return (
    <div dangerouslySetInnerHTML={{__html: htmlContent}}></div>
  )
}

export default BannerAdSense