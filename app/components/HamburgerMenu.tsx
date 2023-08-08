// hamburger menu component
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navigation } from "./Navigation";
import { SocialMediaLinks } from "./SocialMediaLinks";

interface HamburgerMenuProps {
  categories: any;
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ categories }) => {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

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
      name: "Estadisticas",
      slug: "estadisticas",
    },
    {
      name: "Correo de lectores",
      slug: "noticias/correo-de-lectores",
    },
  ];

  return (
    <>
      <button
        type="button"
        className="inline-flex items-center justify-center"
        aria-label="Main menu"
        aria-expanded="false"
        onClick={openMenu}
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
            d="M3.75 9h16.5m-16.5 6.75h16.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div className="fixed h-[100vh] top-0 left-0 z-50">
          <div className="flex flex-col w-[100vw] h-full lg:w-[450px] bg-white border rounded shadow-sm">
            <div className="flex items-center justify-end mb-4">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400"
                aria-label="Close menu"
                aria-expanded="true"
                onClick={closeMenu}
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
            <div className="col-span-2 grid grid-cols-2 items-start [&>*]:px-1">
              <div className="h-[90%]">
                <Navigation links={fixedLinks} className="grid gap-3" />
                <div className="bg-gray-300 w-full h-full">
                  <SocialMediaLinks className="w-full justify-center gap-7 py-10" />
                </div>
              </div>
              <div className="h-[90%] overflow-auto">
                <Navigation
                  links={categories}
                  className="grid gap-3"
                  prefixLink="noticias"
                  onClick={closeMenu}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
