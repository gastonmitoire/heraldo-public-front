import React from "react";

import Link from "next/link";
import { Navigation } from "./Navigation";

interface HeaderProps {
  categories: any;
}

export const Header: React.FC<HeaderProps> = ({ categories }: HeaderProps) => {
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
    <header className="bg-white">
      <div className="flex py-5">
        <div className="flex-1"></div>
        <div className="flex justify-center flex-auto">
          <Link href="/">
            <img
              src="https://www.elheraldo.com.ar/_next/static/media/logoMobile.da7a8911.svg"
              alt=""
              className="h-10"
            />
          </Link>
        </div>
        <div className="flex-1"></div>
      </div>
      <Navigation links={filteredCategories} activeClass />
    </header>
  );
};
