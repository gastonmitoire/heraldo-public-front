// header component

import React from "react";

import { Navigation } from "./Navigation";

export const Header: React.FC = () => {
  return (
    <header className="bg-white">
      <div className="flex py-5">
        <div className="flex-1"></div>
        <div className="flex-auto flex justify-center">
          <img
            src="https://www.elheraldo.com.ar/_next/static/media/logoMobile.da7a8911.svg"
            alt=""
            className="h-10"
          />
        </div>
        <div className="flex-1"></div>
      </div>
      <Navigation />
    </header>
  );
};
