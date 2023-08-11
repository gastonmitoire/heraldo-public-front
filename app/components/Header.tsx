"use client";

import React from "react";
import Image from "next/image";

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
      <header>
        <div className="container mx-auto flex items-center gap-3 px-1 xl:gap-0 xl:py-5">
          <div className="w-[5%] xl:w-[15%]">
            <HamburgerMenu categories={categories} />
          </div>

          <div className="flex-auto flex justify-center">
            <Link href="/">
              <Image
                src="/images/logoMobile.da7a8911.svg"
                alt=""
                className="h-6 sm:h-8 md:h-10 xl:h-12"
                width={700}
                height={50}
              />
            </Link>
          </div>

          <div className="w-[5%] xl:w-[15%] invisible xl:visible flex flex-col justify-center items-end gap-1.5">
            <SocialMediaLinks />
            <time className="py-1 px-1.5 uppercase bg-black font-semibold text-xs text-white">
              {new Date().toLocaleDateString("es-AR", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </div>
        <Navigation
          links={filteredCategories}
          activeClass
          prefixLink="noticias"
          className="hidden sm:flex pt-3"
        />

        <div className="px-3">
          <div className="flex flex-nowrap overflow-y-auto scrollbar-hide sm:hidden">
            <Navigation
              links={filteredCategories}
              activeClass
              prefixLink="noticias"
              className="py-3 [&>a]:line-clamp-1 [&>a]:w-full"
            />
          </div>
        </div>
      </header>
      {banner && pathname !== "/" && (
        <div className="container mx-auto mt-5 px-3 xl:px-0">{banner}</div>
      )}
    </>
  );
};
