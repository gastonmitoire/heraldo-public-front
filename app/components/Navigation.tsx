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

  return (
    <nav>
      <div className="flex py-3">
        <div className="flex-1"></div>
        <div className="flex-auto flex justify-center">
          {!!links ? (
            links.map((link) => (
              <Link
                key={link.slug}
                href={`/noticias/${link.slug}`}
                className={`font-bold text-gray-400 hover:text-gray-800 px-4 ${
                  activeClass && pathname === `/noticias/${link.slug}`
                    ? "text-gray-800"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))
          ) : (
            <div className="flex-auto flex justify-center gap-5">
              {[1, 2, 3, 4, 5].map((n) => (
                <Skeleton key={n} className="h-10 w-32" />
              ))}
            </div>
          )}
        </div>
        <div className="flex-1"></div>
      </div>
    </nav>
  );
};
