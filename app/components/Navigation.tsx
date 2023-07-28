"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Skeleton } from "./Skeleton";

interface LinkProps {
  links: {
    name: string;
    slug: string;
  }[];
  activeClass?: boolean;
}

export const Navigation: React.FC<LinkProps> = ({
  links,
  activeClass,
}: LinkProps) => {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <nav>
      <div className="flex py-3">
        <div className="flex-1"></div>
        <div className="flex-auto flex justify-center">
          {!!links
            ? links.map((link) => (
                <Link
                  key={link.slug}
                  href={link.slug}
                  className={`font-bold text-gray-400 hover:text-gray-800 px-4 ${
                    activeClass && pathname === `/noticias/${link.slug}`
                      ? "text-gray-800"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))
            : [1, 2, 3, 4, 5].map((n) => (
                <Skeleton key={n} className="h-5 w-20" />
              ))}
        </div>
        <div className="flex-1"></div>
      </div>
    </nav>
  );
};
