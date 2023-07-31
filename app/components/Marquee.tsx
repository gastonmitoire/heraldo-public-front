"use client";

import React, { useState } from "react";

interface MarqueeProps {
  titles: string[];
}

export const Marquee: React.FC<MarqueeProps> = ({ titles }) => {
  const [open, setOpen] = useState(true);

  return open ? (
    <div className="bg-red-500">
      <div className="container mx-auto flex items-center gap-1">
        <h5 className="text-xl uppercase font-bold opacity-50">Anticipo</h5>
        <div className="overflow-x-hidden">
          <div className="flex gap-3 py-3 animate-marquee whitespace-nowrap">
            {titles.map((item, index) => (
              <>
                <span
                  key={index}
                  className="inline-block text-2xl text-white font-bold"
                >
                  {item}
                </span>
                <span className="inline-block text-2xl text-white font-bold opacity-70">
                  /
                </span>
              </>
            ))}
          </div>
        </div>

        <button
          className="text-white font-bold uppercase opacity-70 hover:opacity-100"
          onClick={() => setOpen(!open)}
        >
          <svg
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
          >
            <path
              d="M6 18L18 6M6 6l12 12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  ) : null;
};
