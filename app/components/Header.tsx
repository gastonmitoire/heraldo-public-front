"use client";

import React, { useState } from "react";
import Image from "next/image";

import { SVGLogo } from "./Logo";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Drawer } from "./Drawer";
import { HamburgerButton } from "./HamburgerButton";
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
  const [drawerOpen, setDrawerOpen] = useState(false);

  const filteredCategories = categories?.filter(
    (category: any) =>
      category.slug === "deportes" ||
      category.slug === "economia" ||
      category.slug === "interes_general" ||
      category.slug === "policiales" ||
      category.slug === "politica" ||
      category.slug === "sociales"
  );

  const drawerCategories = categories
    ?.filter(
      (category: any) =>
        category.slug !== "locales" &&
        category.slug !== "provinciales" &&
        category.slug !== "nacionales" &&
        category.slug !== "internacionales" &&
        category.slug !== "correo_de_lectores"
    )
    .sort((a: any, b: any) => a.name.localeCompare(b.name));

  const fixedLinks = [
    {
      name: "Inicio",
      slug: "/",
    },
    {
      name: "Tapa del día",
      slug: "tapa-del-dia",
    },
    {
      name: "Avisos fúnebres",
      slug: "funebres",
    },
    {
      external: true,
      name: "Clasificados",
      slug: "https://clasificadoselheraldo.com.ar/",
    },
    {
      name: "Correo de lectores",
      slug: "noticias/correo-de-lectores",
    },
  ];

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      {banner && pathname === "/" && (
        <div className="container mx-auto mt-3 px-3 xl:px-0">{banner}</div>
      )}
      <header className="container mx-auto flex flex-col items-center gap-1">
        <div className="grid grid-cols-3 w-full items-center py-3 px-1 sm:px-0">
          <div>
            <HamburgerButton onClick={openDrawer} withText />
          </div>
          <Link href="/" className="justify-self-center">
            <SVGLogo className="h-[1.1rem] lg:h-[2.5rem]" />
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

      <Drawer open={drawerOpen} onClose={closeDrawer}>
        <div className="flex flex-col w-[100vw] h-full xl:w-[450px] bg-white border rounded shadow-sm pb-3">
          <div className="flex items-center justify-end mb-4">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400"
              aria-label="Close menu"
              aria-expanded="true"
              onClick={closeDrawer}
            >
              <svg
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-500"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-1 h-full">
            <div className="flex flex-col px-1">
              <Navigation
                links={fixedLinks}
                className="grid gap-3 lg:gap-1 pb-5"
                linkClassName="xl:p-[10px] hover:bg-[#eee]"
                onClick={closeDrawer}
              />
              <div className="bg-gray-300 w-full h-full">
                <SocialMediaLinks className="w-full justify-center gap-7 py-10" />
              </div>
            </div>
            <span className="flex h-[93%] overflow-auto px-1">
              <Navigation
                links={drawerCategories}
                prefixLink="noticias"
                className="grid gap-3 lg:gap-1 w-full h-full"
                linkClassName="xl:p-[10px] hover:bg-[#eee]"
                onClick={closeDrawer}
              />
            </span>
          </div>
        </div>
      </Drawer>
    </>
  );
};
