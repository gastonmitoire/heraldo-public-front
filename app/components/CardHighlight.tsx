// card highlight component

import React, { Suspense } from "react";
import Link from "next/link";

interface CardHighlightProps {
  item: {
    title: string;
    excerpt: string;
    slug: string;
    image: {
      url: string;
    };
    category: {
      name: string;
      slug: string;
    };
  };
  prefixLink?: string;
  fullWidth?: boolean;
  className?: string;
}

export const CardHighlight: React.FC<CardHighlightProps> = ({
  item: { title, excerpt, image, category, slug },
  prefixLink,
  fullWidth,
  className,
}) => {
  return (
    <Suspense>
      <Link
        href={
          prefixLink
            ? `${prefixLink}/${category.slug}/${slug}`
            : `/noticias/${category.slug}/${slug}`
        }
        className={`group hover:cursor-pointer ${
          fullWidth ? "h-[500px]" : "h-[450px]"
        }  ${className}`}
      >
        <article
          className="h-full"
          style={{
            background: `url("${image.url}")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {fullWidth ? (
            <div className="h-full group-hover:bg-black group-hover:bg-opacity-30 transition-colors relative">
              <span className="absolute w-full min-h-[100px] bg-gradient-to-b from-white via-transparent opacity-95"></span>
              <div className="absolute bottom-5 w-1/2 translate-x-1/2 text-center">
                <h5
                  className={`truncate text-lg font-bold pb-1.5 pr-16 text-white`}
                >
                  {excerpt}
                </h5>
                <p className="text-lg font-bold pt-1.5 w-[90%]">
                  <span className="bg-white p-1">{title}</span>
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
                <span className="bg-white p-1">{title}</span>
              </p>
            </div>
          )}
        </article>
      </Link>
    </Suspense>
  );
};
