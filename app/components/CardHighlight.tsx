// card highlight component

import React from "react";

interface CardHighlightProps {
  excerpt: string;
  title: string;
  image: string;
}

export const CardHighlight: React.FC<CardHighlightProps> = ({
  excerpt,
  title,
  image,
}) => {
  return (
    <article
      className="min-h-[400px] bg-pink-50 bg-cover bg-center bg-no-repeat group hover:cursor-pointer"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex flex-col justify-end h-full pl-3 pb-3 group-hover:bg-black group-hover:bg-opacity-30 transition-colors">
        <h5 className="text-white truncate text-lg font-bold pb-1.5 pr-16">
          {excerpt}
        </h5>
        <p className="text-lg font-bold pt-1.5 w-[90%]">
          <span className="bg-white">{title}</span>
        </p>
      </div>
    </article>
  );
};
