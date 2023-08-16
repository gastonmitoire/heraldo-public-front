"use client";

import React, { useEffect, useState } from "react";

import { SVGLogo } from "./Logo";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Drawer } from "./Drawer";
import { HamburgerButton } from "./HamburgerButton";
import { Navigation } from "./Navigation";
import { SearchBar } from "../features/posts/PostsSearchBar";
import { SocialMediaLinks } from "./SocialMediaLinks";

import { PrintedEditionModal } from "../features/printed-edition/PrintedEditionModal";

import { PrintedEditionProps } from "@/types";

interface HeaderProps {
  categories: any;
  banner: React.ReactNode;
  printedEdition: PrintedEditionProps;
}

export const Header: React.FC<HeaderProps> = ({
  categories,
  banner,
  printedEdition,
}: HeaderProps) => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [searching, setSearching] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalPrintedEditionOpen, setModalPrintedEditionOpen] = useState(false);

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

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  if (mounted) {
    drawerOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {banner && pathname === "/" && (
        <div className="container mx-auto mt-3 px-3 xl:px-0">{banner}</div>
      )}
      <header className="container mx-auto flex flex-col items-center gap-1">
        <div className="grid grid-cols-3 w-full min-h-[65px] items-center py-3 px-1 sm:px-0">
          {searching ? (
            <span className="col-span-3 flex items-center px-1">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-[#eee]"
                aria-label="Search"
                aria-expanded="true"
                onClick={() => setSearching(false)}
              >
                <svg
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-500 hover:text-gray-700"
                >
                  <path
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <SearchBar onClickSelected={() => setSearching(false)} />
            </span>
          ) : (
            <>
              <div className="flex items-center gap-3">
                <HamburgerButton onClick={openDrawer} withText />
                <button
                  type="button"
                  className="hidden sm:inline-flex items-center justify-center p-2 rounded-md hover:bg-[#eee]"
                  aria-label="Search"
                  aria-expanded="true"
                  onClick={() => setSearching(true)}
                >
                  <svg
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                  >
                    <path
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <Link href="/" className="justify-self-center">
                <SVGLogo className="h-[1.1rem] lg:h-[2.5rem]" />
              </Link>
              <SocialMediaLinks className="justify-self-end hidden sm:flex" />
            </>
          )}
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
              <nav className="flex flex-col gap-3 lg:gap-1">
                <Link
                  href={`/`}
                  className={`font-bold text-black xl:p-[10px] hover:bg-[#eee]`}
                  onClick={closeDrawer}
                >
                  Inicio
                </Link>
                <Link
                  href={`/`}
                  className={`font-bold text-black xl:p-[10px] hover:bg-[#eee]`}
                  onClick={() => {
                    setModalPrintedEditionOpen(true);
                    closeDrawer();
                  }}
                >
                  Tapa del día
                </Link>
                <Link
                  href={`funebres`}
                  className={`font-bold text-black xl:p-[10px] hover:bg-[#eee]`}
                  onClick={closeDrawer}
                >
                  Avisos fúnebres
                </Link>
                <Link
                  href={`https://clasificadoselheraldo.com.ar/`}
                  className={`font-bold text-black xl:p-[10px] hover:bg-[#eee]`}
                  onClick={closeDrawer}
                  target="_blank"
                >
                  Clasificados
                </Link>
                <Link
                  href={`/noticias/correo_de_lectores`}
                  className={`font-bold text-black xl:p-[10px] hover:bg-[#eee]`}
                  onClick={closeDrawer}
                >
                  Correo de lectores
                </Link>
              </nav>

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

      <PrintedEditionModal
        open={modalPrintedEditionOpen}
        onClose={() => setModalPrintedEditionOpen(false)}
        currentPrintedEdition={printedEdition}
      />
    </>
  );
};
