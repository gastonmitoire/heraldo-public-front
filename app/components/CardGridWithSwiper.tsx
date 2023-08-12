// card grid with swiper component
"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Card } from "./Card";
import { Skeleton } from "./Skeleton";
import { AdServerProps } from "@/types";
import { Banner } from "./Banner";

interface CardGridWithSwiperProps {
  data: any[];
  className?: string;
  cardClassName?: string;
  banner?: AdServerProps;
}

export const CardGridWithSwiper: React.FC<CardGridWithSwiperProps> = ({
  data,
  className,
  cardClassName,
}) => {
  if (!data) return null;

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={12}
        slidesPerView={4}
        navigation
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
        className="h-[370px]"
      >
        {!!data &&
          data.length > 0 &&
          data.map((item: any) => (
            <SwiperSlide key={item._id}>
              <>
                {item.type === "banner" ? (
                  <div className="w-full h-full">
                    <Banner banner={item} className="h-[250px]" />
                  </div>
                ) : (
                  <Card
                    item={{
                      title: item.title,
                      flywheel: item.flywheel,
                      image: item.images[0],
                      category: item.category,
                      slug: item.slug,
                      liveSports: item.liveSports,
                    }}
                  />
                )}
              </>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};
