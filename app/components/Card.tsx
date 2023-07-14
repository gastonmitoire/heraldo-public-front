// card component

import React from "react";

interface CardProps {
  excerpt: string;
  title: string;
  category: string;
  image: string;
  href: string;
}

export const Card: React.FC<CardProps> = ({
  excerpt,
  title,
  category,
  image,
  href,
}) => {
  return (
    <article className="flex flex-col max-w-[300px] border-b-2 border-transparent group hover:border-blue-500 hover:cursor-pointer">
      <div className="flex-1 relative group-hover:brightness-75">
        <span className="absolute top-3 left-3 uppercase bg-black text-white font-light text-sm py-1 px-3">
          {category}
        </span>
        <img src={image} alt="" />
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
