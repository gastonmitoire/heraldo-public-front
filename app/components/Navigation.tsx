"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Skeleton } from "./Skeleton";

interface LinkProps {
  links: {
    name: string;
    slug: string;
    external?: boolean;
  }[];
  prefixLink?: string;
  activeClass?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Navigation: React.FC<LinkProps> = ({
  links,
  prefixLink,
  activeClass,
  className,
  onClick,
}: LinkProps) => {
  const pathname = usePathname();

  return (
    <nav className={`flex justify-center ${className}`}>
      {!!links ? (
        links.map((link) =>
          link.external ? (
            <Link
              key={link.slug}
              href={link.slug}
              className={`font-bold text-gray-400 hover:text-gray-800 px-4`}
              onClick={onClick}
              target="_blank"
            >
              {link.name}
            </Link>
          ) : (
            <Link
              key={link.slug}
              href={`/${prefixLink ? prefixLink + "/" : ""}${link.slug}`}
              className={`font-bold text-gray-400 hover:text-gray-800 px-4 ${
                activeClass && pathname === "/" + prefixLink + "/" + link.slug
                  ? "text-gray-800"
                  : ""
              }`}
              onClick={onClick}
            >
              {link.name}
            </Link>
          )
        )
      ) : (
        <div className="flex justify-center gap-5">
          {[1, 2, 3, 4, 5].map((n) => (
            <Skeleton key={n} className="h-10 w-32" />
          ))}
        </div>
      )}
    </nav>
  );
};
