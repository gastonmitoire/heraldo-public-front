// heading component

import React from "react";
import Link from "next/link";

interface HeadingProps {
  title: string;
  link?: string;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({ title, link, className }) => {
  return (
    <nav className="flex justify-between gap-5 pb-3 w-full px-3 xl:px-0">
      <h2 className="flex-0 text-2xl font-bold">{title}</h2>
      <div className="flex-auto flex items-center">
        <div className="w-full border-b border-gray-200"></div>
      </div>
      {link && (
        <Link
          href={link}
          className="flex-0 font-bold opacity-70 transition-opacity hover:opacity-100"
        >
          <span>Ver más</span>
        </Link>
      )}
    </nav>
  );
};
