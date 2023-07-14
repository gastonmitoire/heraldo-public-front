// footer component

import React from "react";

import { Navigation } from "./Navigation";
import { SocialMediaLinks } from "./SocialMediaLinks";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 py-3">
      <div className="container mx-auto divide-y divide-gray-400">
        <div className="flex justify-between items-center py-5">
          <SocialMediaLinks />
          <img
            src="https://www.elheraldo.com.ar/_next/static/media/logoBottom.86227929.svg"
            alt=""
            className="h-10"
          />

          <button type="button">Ver tapa del día</button>
        </div>

        <div className="py-5">
          <Navigation />
        </div>

        <div className="flex flex-col justify-between items-center py-5">
          <div>
            <span className="uppercase font-bold text-lg">
              El Heraldo S.R.L
            </span>{" "}
            <span>- Quintana 42 - 3200 Concordia - ER</span>
          </div>
          <p>Tel: (+54) 345 421 5304/1397</p>
          <p>
            Director Periodístico: <span>Roberto W. Caminos</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
