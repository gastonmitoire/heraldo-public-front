// footer component

import React from "react";

import { Navigation } from "./Navigation";
import { SocialMediaLinks } from "./SocialMediaLinks";

interface FooterProps {
  categories: any;
}

export const Footer: React.FC<FooterProps> = ({ categories }) => {
  return (
    <footer className="py-3 mt-10 bg-gray-200">
      <div className="container mx-auto divide-y divide-gray-400">
        <div className="flex items-center justify-center xl:justify-between py-5">
          <SocialMediaLinks className="hidden xl:flex" />

          <img
            src="https://www.elheraldo.com.ar/_next/static/media/logoBottom.86227929.svg"
            alt=""
            className="h-10"
          />

          <button type="button" className="hidden xl:flex">
            Ver tapa del día
          </button>
        </div>

        <div className="py-5">
          <Navigation
            links={categories}
            className="grid gap-1 grid-cols-2 md:grid-cols-3 xl:grid-cols-7"
            prefixLink="noticias"
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

          <img
            src="https://www.elheraldo.com.ar/_next/static/media/imgQRFooter.42875908.svg"
            alt=""
            className="mx-auto mt-5 h-20"
          />
        </div>
      </div>
    </footer>
  );
};
