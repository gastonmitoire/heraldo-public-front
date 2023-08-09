// card highlight component

import React, { Suspense } from "react";
import Link from "next/link";

interface CardHighlightProps {
  item: {
    title: string;
    flywheel: string;
    slug: string;
    liveSports?: string;
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
  item: { title, flywheel, slug, liveSports, image, category },
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
          fullWidth ? "h-[500px] md:h-[600px] lg:[700px]" : "h-[450px]"
        }  ${className}`}
      >
        <article
          className="h-full"
          style={{
            background: `url("${image.url}")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
          }}
        >
          {fullWidth ? (
            <div className="h-full group-hover:bg-black group-hover:bg-opacity-30 transition-colors relative">
              <span className="absolute w-full min-h-[100px] bg-gradient-to-b from-white via-transparent opacity-95"></span>

              <div className="absolute bottom-5 w-1/2 translate-x-1/2 text-center">
                {liveSports && (
                  <div className="w-[50%] mx-auto pr-3">
                    <iframe
                      src={liveSports}
                      className="w-full opacity-80 group-hover:opacity-100"
                    ></iframe>
                    <div className="absolute top-0 right-0 bottom-0 left-0 opacity-0 cursor-pointer"></div>
                  </div>
                )}
                <h5
                  className={`truncate text-lg font-bold pb-1.5 pr-16 text-white`}
                >
                  {flywheel}
                </h5>
                <p className="text-lg font-bold pt-1.5 w-[90%]">
                  <span className="bg-white p-1">{title}</span>
                </p>
              </div>
            </div>
          ) : (
            <div className="relative flex flex-col justify-end h-full pl-3 pb-3 group-hover:bg-black group-hover:bg-opacity-30 transition-colors">
              {liveSports && (
                <div className="w-[50%] mx-auto pr-3">
                  <iframe
                    src={liveSports}
                    className="w-full opacity-80 group-hover:opacity-100"
                  ></iframe>
                  <div className="absolute top-0 right-0 bottom-0 left-0 opacity-0 cursor-pointer"></div>
                </div>
              )}
              <h5
                className={`truncate text-lg font-bold pb-1.5 pr-16 text-blue-500`}
              >
                {flywheel}
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
