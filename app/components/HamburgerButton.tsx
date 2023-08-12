import React, { useState } from "react";

interface HamburgerButtonProps {
  onClick?: () => void;
  className?: string;
}

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  onClick,
  className,
}) => {
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
        className={`flex items-center justify-center ${className || ""}}`}
        aria-label="Main menu"
        aria-expanded="false"
        onClick={onClick}
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
    </>
  );
};
