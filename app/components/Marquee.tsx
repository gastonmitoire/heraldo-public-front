import React from "react";

interface MarqueeProps {
  titles: string[];
}

export const Marquee: React.FC<MarqueeProps> = ({ titles }) => {
  return (
    <div className="flex items-center gap-1 bg-red-500 px-16">
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
    </div>
  );
};
