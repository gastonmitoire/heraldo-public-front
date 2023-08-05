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
import { Skeleton } from "./Skeleton";

interface CardGridWithSwiperProps {
  data: any[];
  className?: string;
  cardClassName?: string;
  heading?: string;
}

export const CardGridWithSwiper: React.FC<CardGridWithSwiperProps> = ({
  data,
  className,
  cardClassName,
  heading,
}) => {
  return (
    <>
      <p className="text-sm font-bold">
        {heading}
      </p>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={12}
        slidesPerView={4}
        navigation
        className={`flex flex-col gap-3 ${className}`}
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
            slidesPerView: 4,
          },
          // extra large screens
          1536: {
            slidesPerView: 4,
          },
        }}
      >
        {!!data && data.length > 0 ? (
          data.map((item: any) => (
            <SwiperSlide key={item._id}>
              <Card
                item={{
                  title: item.title,
                  excerpt: item.excerpt,
                  image: item.images[0],
                  category: item.category,
                }}
                className={`h-[400px] ${cardClassName}`}
                imageClassName="h-[250px] object-cover select-none"
              />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <Skeleton />
          </SwiperSlide>
        )}
      </Swiper>
    </>
  );
};
