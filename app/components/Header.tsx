"use client";

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Banner } from "./Banner";
import { HamburgerMenu } from "./HamburgerMenu";
import { Navigation } from "./Navigation";
import { SocialMediaLinks } from "./SocialMediaLinks";

interface HeaderProps {
  categories: any;
  banner?: any;
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
        <div className="container mx-auto">
          <Banner banner={banner} />
        </div>
      )}
      <header className="bg-white">
        <div className="container mx-auto flex py-5">
          <div className="flex-1">
            <HamburgerMenu categories={categories} />
          </div>
          <div className="flex justify-center flex-auto">
            <Link href="/">
              <img
                src="https://www.elheraldo.com.ar/_next/static/media/logoMobile.da7a8911.svg"
                alt=""
                className="h-12"
              />
            </Link>
          </div>
          <div className="flex-1 flex flex-col justify-center items-end gap-1.5">
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
        />
      </header>
      {banner && pathname !== "/" && (
        <div className="container mx-auto">
          <Banner banner={banner} />
        </div>
      )}
    </>
  );
};
