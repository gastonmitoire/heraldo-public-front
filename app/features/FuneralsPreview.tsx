// funerals preview component

import React from "react";

import { FuneralNotice } from "@/types";

import { FuneralsSwiper } from "./FuneralsSwiper";

interface Props {
  funerals: FuneralNotice[];
}

export const FuneralsPreview: React.FC<Props> = ({ funerals }) => {
  const customItemRender = (item: any) => (
    <div
      key={item._id}
      className="flex items-center justify-center gap-3 px-3 py-5 bg-black text-white cursor-pointer hover:bg-opacity-90 transition-all"
    >
      <img
        src="https://www.elheraldo.com.ar/_next/static/media/imgCrossCardFunebre.b81ca149.svg"
        alt=""
      />
      <p className="text-sm">{item.title}</p>
    </div>
  );

  const swiperOptions = {
    spaceBetween: 12,
    slidesPerView: 4,
    navigation: true,
    // Customize more options if needed
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      },
      1536: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <div className="flex flex-col">
      <nav className="flex justify-between gap-5 pb-3">
        <h2 className="flex-0 text-2xl font-bold">Avisos fúnebres</h2>
        <div className="flex-auto flex items-center">
          <div className="w-full border-b border-gray-200"></div>
        </div>
        <button className="flex-0 font-bold opacity-70 transition-opacity hover:opacity-100">
          <span>Ver más</span>
        </button>
      </nav>
      <div>
        <FuneralsSwiper funerals={funerals.slice(0, 5)} />
      </div>
    </div>
  );
};
