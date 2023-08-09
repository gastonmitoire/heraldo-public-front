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
          className={`${className} flex flex-col group hover:cursor-pointer transition-all`}
        >
          <figure className="flex-1 relative group-hover:brightness-75 transition-all">
            <span className="absolute top-3 left-3 uppercase bg-black bg-opacity-80 text-white font-light text-sm py-1 px-3">
              {category?.name}
            </span>

            <Image
              src={image.url}
              alt={title}
              className={`max-h-[300px] w-full ${imageClassName}`}
              height={300}
              width={300}
            />

            {liveSports && (
              <div className="absolute bottom-0 w-full">
                <iframe
                  src={liveSports}
                  className="w-full opacity-80 group-hover:opacity-100"
                ></iframe>
              </div>
            )}
            <div className="absolute top-0 right-0 bottom-0 left-0 opacity-0 cursor-pointer"></div>
          </figure>
          <div className="flex-1 pt-3 border p-5">
            <h5 className="text-blue-500 truncate text-lg font-bold pr-16">
              {flywheel}
            </h5>
            <p className="text-lg font-bold">{title}</p>
          </div>
        </article>
      </Link>
    </Suspense>
  );
};
