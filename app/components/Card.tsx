// card component

import React from "react";

interface CardProps {
  excerpt: string;
  title: string;
  category: string;
  image: string;
  horizontal?: boolean;
  className?: string;
  imageClassName?: string;
}

export const Card: React.FC<CardProps> = ({
  excerpt,
  title,
  category,
  image,
  horizontal,
  className,
  imageClassName,
}) => {
  return horizontal ? (
    <article
      className={`${className} flex max-w-[300px] group hover:cursor-pointer transition-all`}
    >
      <img
        src={image}
        alt=""
        className={`w-[190px] h-full object-contain flex-auto group-hover:brightness-75 transition-all ${imageClassName}`}
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
      className={`${className} flex flex-col border-b-2 border-transparent group hover:border-blue-500 hover:cursor-pointer transition-all`}
    >
      <div className="flex-1 relative group-hover:brightness-75 transition-all">
        <span className="absolute top-3 left-3 uppercase bg-black bg-opacity-80 text-white font-light text-sm py-1 px-3">
          {category}
        </span>
        <img
          src={image}
          alt=""
          className={`max-h-[300px] w-full ${imageClassName}`}
        />
      </div>
      <div className="flex-1 pt-3 divide-y">
        <h5 className="text-blue-500 truncate text-lg font-bold pb-1.5 pr-16">
          {excerpt}
        </h5>
        <p className="text-lg font-bold pt-1.5">{title}</p>
      </div>
    </article>
  );
};
