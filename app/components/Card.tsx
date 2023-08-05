// card component

import React from "react";
import Image from "next/image";

import { Skeleton } from "./Skeleton";

interface CardProps {
  item: {
    title: string;
    excerpt: string;
    image: {
      url: string;
    };
    category?: {
      name: string;
    };
  };
  className?: string;
  imageClassName?: string;
}

export const Card: React.FC<CardProps> = ({
  item: { title, excerpt, image, category },
  className,
  imageClassName,
}) => {
  return (
    <article
      className={`${className} flex flex-col group hover:cursor-pointer transition-all`}
    >
      <div className="flex-1 relative group-hover:brightness-75 transition-all">
        <span className="absolute top-3 left-3 uppercase bg-black bg-opacity-80 text-white font-light text-sm py-1 px-3">
          {category?.name}
        </span>
        <Image
          src={image.url}
          alt={title}
          className={`max-h-[300px] w-full ${imageClassName}`}
          fill
        />
      </div>
      <div className="flex-1 pt-3 border p-5">
        <h5 className="text-blue-500 truncate text-lg font-bold pr-16">
          {excerpt}
        </h5>
        <p className="text-lg font-bold">{title}</p>
      </div>
    </article>
  );
};
