// funerals swiper component
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface Props {
  funerals: any[];
}

export const FuneralsSwiper: React.FC<Props> = ({ funerals }) => {
  return (
    <Swiper
      modules={[Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={5}
      className={`flex flex-col gap-3`}
      breakpoints={{
        // when window width is >= 640px
        320: {
          slidesPerView: 1,
        },
        // small screens
        640: {
          slidesPerView: 1,
        },
        // medium screens
        768: {
          slidesPerView: 2,
        },
        // large screens
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 5,
        },
        // extra large screens
        1536: {
          slidesPerView: 5,
        },
      }}
    >
      {funerals.map((item) => (
        <SwiperSlide key={item._id}>
          <div className="flex items-center justify-center gap-3 px-3 py-5 bg-black text-white cursor-pointer hover:bg-opacity-90 transition-all">
            <img
              src="https://www.elheraldo.com.ar/_next/static/media/imgCrossCardFunebre.b81ca149.svg"
              alt=""
            />
            <p className="text-sm">{item.title}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
