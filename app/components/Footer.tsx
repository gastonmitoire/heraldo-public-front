// footer component

import React from "react";
import Image from "next/image";

import { Navigation } from "./Navigation";
import { SocialMediaLinks } from "./SocialMediaLinks";

interface FooterProps {
  categories: any;
}

export const Footer: React.FC<FooterProps> = ({ categories }) => {
  const footerCategories = categories
    ?.filter(
      (category: any) =>
        category.slug !== "locales" &&
        category.slug !== "provinciales" &&
        category.slug !== "nacionales" &&
        category.slug !== "internacionales" &&
        category.slug !== "correo_de_lectores"
    )
    .sort((a: any, b: any) => a.name.localeCompare(b.name));

  return (
    <footer className="py-3 mt-10 bg-gray-200">
      <div className="container mx-auto divide-y divide-gray-400">
        <div className="flex items-center justify-center xl:justify-between py-5">
          <SocialMediaLinks className="hidden xl:flex" />

          <Image
            src="/images/logoBottom.86227929.svg"
            alt=""
            className="h-10"
            width={300}
            height={50}
          />

          <button type="button" className="hidden xl:flex">
            Ver tapa del día
          </button>
        </div>

        <div className="py-5">
          <Navigation
            links={footerCategories}
            prefixLink="noticias"
            className="grid gap-1 grid-cols-2 md:grid-cols-3 xl:grid-cols-5 px-3 sm:px-0"
          />
        </div>

        <div className="flex flex-col items-start xl:items-center justify-between py-5 px-3 xl:px-0">
          <div>
            <span className="text-lg font-bold uppercase">
              El Heraldo S.R.L
            </span>{" "}
            <span>- Quintana 42 - 3200 Concordia - ER</span>
          </div>
          <p>Tel: (+54) 345 421 5304/1397</p>
          <p>
            Director Periodístico: <span>Roberto W. Caminos</span>
          </p>

          <Image
            src="/images/imgQRFooter.42875908.svg"
            alt=""
            className="mx-auto mt-5 h-20"
            width={100}
            height={100}
          />
        </div>
      </div>
    </footer>
  );
};
