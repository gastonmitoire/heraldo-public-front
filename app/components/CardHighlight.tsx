// card highlight component

import React from "react";

interface CardHighlightProps {
  excerpt: string;
  title: string;
  image: string;
  fullWidth?: boolean;
}

export const CardHighlight: React.FC<CardHighlightProps> = ({
  excerpt,
  title,
  image,
  fullWidth,
}) => {
  return (
    <article
      className={`group hover:cursor-pointer bg-cover bg-center bg-no-repeat ${
        fullWidth ? "h-[450px]" : "h-[400px] max-w-[450px]"
      }`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {fullWidth ? (
        <div className="h-full group-hover:bg-black group-hover:bg-opacity-30 transition-colors relative">
          <div className="absolute bottom-5 w-1/2 translate-x-1/2 text-center">
            <h5
              className={`truncate text-lg font-bold pb-1.5 pr-16 text-white`}
            >
              {excerpt}
            </h5>
            <p className="text-lg font-bold pt-1.5 w-[90%]">
              <span className="bg-white">{title}</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-end h-full pl-3 pb-3 group-hover:bg-black group-hover:bg-opacity-30 transition-colors">
          <h5
            className={`truncate text-lg font-bold pb-1.5 pr-16 text-blue-500`}
          >
            {excerpt}
          </h5>
          <p className="text-lg font-bold pt-1.5 w-[90%]">
            <span className="bg-white">{title}</span>
          </p>
        </div>
      )}
    </article>
  );
};
