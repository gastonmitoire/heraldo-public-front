// card component

import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";

import { Skeleton } from "./Skeleton";

interface CardProps {
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
  className?: string;
  imageClassName?: string;
}

export const Card: React.FC<CardProps> = ({
  item: { title, flywheel, slug, liveSports, image, category },
  prefixLink,
  className,
  imageClassName,
}) => {
  return (
    <Suspense>
      <Link
        href={
          prefixLink
            ? `${prefixLink}/${category.slug}/${slug}`
            : `/noticias/${category.slug}/${slug}`
        }
      >
        <article
          className={`h-full w-full grid grid-cols-1 grid-rows-5 group ${
            className ? className : ""
          }`}
        >
          <figure className="row-span-3 relative group-hover:brightness-75 transition-all overflow-y-hidden xl:min-h-[290px]">
            <Image
              src={image.url}
              alt={title}
              layout="fill"
              objectFit="cover"
            />

            {liveSports && (
              <div className="absolute -bottom-14 w-full hidden xl:block">
                <iframe
                  src={liveSports}
                  className="w-full opacity-80 group-hover:opacity-100"
                ></iframe>
              </div>
            )}
            <div className="absolute top-0 right-0 bottom-0 left-0 opacity-0 cursor-pointer"></div>
          </figure>

          <span className="row-span-2 border pt-5 px-5 group-hover:bg-gray-100">
            <h5 className="text-blue-500 truncate text-lg font-bold pr-16">
              {flywheel}
            </h5>
            <p className="text-lg font-bold">{title}</p>
          </span>
        </article>
      </Link>
    </Suspense>
  );
};
