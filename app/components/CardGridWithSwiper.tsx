// card grid with swiper component
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Card } from "./Card";

interface CardGridWithSwiperProps {
  data: any[];
  className?: string;
}

export const CardGridWithSwiper: React.FC<CardGridWithSwiperProps> = ({
  data,
  className,
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={4}
      navigation
      className={`flex flex-col gap-5 ${className}`}
      breakpoints={{
        // when window width is >= 640px
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // small screens
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // medium screens
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        // large screens
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        // extra large screens
        1536: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
    >
      {data.map((item: any) => (
        <SwiperSlide>
          <Card
            item={{
              title: item.title,
              excerpt: item.excerpt,
              image: item.images[0],
              category: item.category,
            }}
            className="h-full"
            imageClassName="h-[250px] object-cover select-none"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
