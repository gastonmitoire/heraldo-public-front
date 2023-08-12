"use client";

import React from "react";
import Image from "next/image";

import { SVGLogo } from "./Logo";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { HamburgerMenu } from "./HamburgerMenu";
import { Navigation } from "./Navigation";
import { SocialMediaLinks } from "./SocialMediaLinks";

import { AdServerPositions } from "../features/ad-servers/service/ad-servers.service";

interface HeaderProps {
  categories: any;
  banner: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({
  categories,
  banner,
}: HeaderProps) => {
  const pathname = usePathname();

  const filteredCategories = categories?.filter(
    (category: any) =>
      category.slug === "deportes" ||
      category.slug === "economia" ||
      category.slug === "interes_general" ||
      category.slug === "policiales" ||
      category.slug === "politica" ||
      category.slug === "sociales"
  );

  return (
    <>
      {banner && pathname === "/" && (
        <div className="container mx-auto mt-3 px-3 xl:px-0">{banner}</div>
      )}
      <header className="container mx-auto flex flex-col items-center gap-1">
        <div className="grid grid-cols-3 w-full items-center py-3">
          <div>
            <HamburgerMenu categories={categories} />
          </div>
          <Link href="/" className="justify-self-center">
            <SVGLogo className="h-[1.5rem] lg:h-[2.5rem]" />
          </Link>
          <SocialMediaLinks className="justify-self-end hidden sm:flex" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:items-center w-full">
          <Navigation
            links={filteredCategories}
            prefixLink="noticias"
            className="lg:col-start-2 lg:col-end-5 hidden md:flex justify-center gap-1.5 w-full items-center"
            linkClassName="p-[7px] xl:p-[10px] hover:bg-[#eee]"
          />

          <Navigation
            links={filteredCategories}
            prefixLink="noticias"
            className="flex md:hidden gap-1 py-3 whitespace-nowrap overflow-x-auto scrollbar-hide items-center"
            linkClassName="inline-block text-center px-3"
          />

          <span className="order-first lg:order-last flex justify-center lg:justify-end md:pt-0">
            <time className="p-1 uppercase bg-black font-semibold text-xs text-center lg:text-right text-white">
              {new Date().toLocaleDateString("es-AR", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </span>
        </div>
      </header>
      {banner && pathname !== "/" && (
        <div className="container mx-auto mt-5 px-3 xl:px-0">{banner}</div>
      )}
    </>
  );
};
