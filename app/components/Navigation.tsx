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
  className?: string;
  linkClassName?: string;
  onClick?: () => void;
}

export const Navigation: React.FC<LinkProps> = ({
  links,
  prefixLink,
  className,
  linkClassName,
  onClick,
}: LinkProps) => {
  const pathname = usePathname();

  return (
    <nav className={className}>
      {!!links ? (
        links.map((link) =>
          link.external ? (
            <Link
              key={link.slug}
              href={link.slug}
              className={`font-bold text-black px-4`}
              onClick={onClick}
              target="_blank"
            >
              {link.name}
            </Link>
          ) : (
            <Link
              key={link.slug}
              href={`/${prefixLink ? prefixLink + "/" : ""}${link.slug}`}
              className={`font-bold text-black ${
                linkClassName ? linkClassName : ""
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
