// navigation component

import React from "react";
import Link from "next/link";

const fakeLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
];

export const Navigation: React.FC = () => {
  return (
    <nav className="bg-white">
      <div className="flex py-3">
        <div className="flex-1"></div>
        <div className="flex-auto flex justify-center">
          {fakeLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-400 hover:text-gray-800 px-4"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex-1"></div>
      </div>
    </nav>
  );
};
