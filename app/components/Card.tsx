// card component

import React from "react";
import Image from "next/image";

import { Post } from "@/types";

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
  horizontal?: boolean;
  className?: string;
  imageClassName?: string;
}

export const Card: React.FC<CardProps> = ({
  item: { title, excerpt, image, category },
  horizontal,
  className,
  imageClassName,
}) => {
  return horizontal ? (
    <article
      className={`flex max-w-[300px] group transition-all hover:cursor-pointer ${className}`}
    >
      <Image
        src={image.url}
        alt=""
        className={`w-[190px] h-full object-contain flex-auto group-hover:brightness-75 transition-all ${imageClassName}`}
        width={190}
        height={190}
      />

      <div className="divide-y px-3 flex flex-col justify-center">
        <h5 className="text-blue-500 truncate text-sm font-bold pb-1.5 pr-16">
          {excerpt}
        </h5>
        <p className="text-sm font-bold pt-1.5">{title}</p>
      </div>
    </article>
  ) : (
    <article
      className={`${className} flex flex-col group hover:cursor-pointer transition-all`}
    >
      <div className="flex-1 relative group-hover:brightness-75 transition-all">
        <span className="absolute top-3 left-3 uppercase bg-black bg-opacity-80 text-white font-light text-sm py-1 px-3">
          {category?.name}
        </span>
        <Image
          src={image.url}
          alt=""
          className={`max-h-[300px] w-full ${imageClassName}`}
          width={300}
          height={200}
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
