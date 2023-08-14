// card highlight component

import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";

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
          fullWidth ? "h-[500px] md:h-[600px] xl:[700px]" : "h-[450px]"
        }  ${className}`}
      >
        <article className="h-full">
          {fullWidth ? (
            <div className="h-full relative">
              <Image
                src={image.url}
                layout="fill"
                objectFit="cover"
                alt={title}
                className="group-hover:brightness-75 transition-all"
              />

              <span className="absolute w-full min-h-[100px] bg-gradient-to-b from-white via-transparent opacity-95"></span>

              <div className="text-center absolute bottom-5 w-full m-auto xl:w-1/2 xl:translate-x-1/2">
                {liveSports && (
                  <div className="hidden xl:block w-[50%] mx-auto pr-3">
                    <iframe
                      src={liveSports}
                      className="w-full opacity-80 group-hover:opacity-100"
                    ></iframe>
                    <div className="absolute top-0 right-0 bottom-0 left-0 opacity-0 cursor-pointer"></div>
                  </div>
                )}

                <span className="flex flex-col items-center text-[1.5rem]">
                  <h5
                    className={`truncate font-bold text-white text-center`}
                    style={{
                      textShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    {flywheel}
                  </h5>
                  <p className={`font-bold pt-1.5 xl:w-[90%]`}>
                    <span className="bg-white p-1">{title}</span>
                  </p>
                </span>
              </div>
            </div>
          ) : (
            <div className="relative flex flex-col justify-end h-full pl-3 pb-3">
              <Image
                src={image.url}
                layout="fill"
                objectFit="cover"
                alt={title}
                className="group-hover:brightness-75 transition-all"
              />
              <span className="absolute right-0 left-0 px-3 w-full">
                {liveSports && (
                  <div className="hidden xl:block w-[60%] mx-auto pr-3 z-10">
                    <iframe
                      src={liveSports}
                      className="w-full opacity-80 group-hover:opacity-100"
                    ></iframe>
                    <div className="absolute top-0 right-0 bottom-0 left-0 opacity-0 cursor-pointer"></div>
                  </div>
                )}
                <h5
                  className={`truncate font-bold pb-1.5 pr-16 text-[1.5rem] text-white`}
                  style={{
                    textShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {flywheel}
                </h5>
                <p className={`text-[1.5rem] font-bold pt-1.5 w-[95%]`}>
                  <span className="bg-white p-1">{title}</span>
                </p>
              </span>
            </div>
          )}
        </article>
      </Link>
    </Suspense>
  );
};
