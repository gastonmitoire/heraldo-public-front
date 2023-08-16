// readers-mail-swiper component
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface Props {
  posts: any[];
}

export const ReadersMailSwiper: React.FC<Props> = ({ posts }) => {
  return (
    <>
      <Swiper
        modules={[Pagination, Scrollbar, A11y]}
        spaceBetween={15}
        slidesPerView={5}
        className={`flex flex-col gap-3 h-[125px]`}
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
        {posts.map((item) => (
          <SwiperSlide key={item._id}>
            <Link
              href={`/noticias/correo_de_lectores/${item.slug}`}
              className="flex item-center gap-3 p-3 h-full border hover:bg-[#eee]"
            >
              <div className="flex-0 h-24 w-24 self-center overflow-hidden rounded-full relative">
                <Image
                  src={item.images[0].url}
                  alt={item.title}
                  fill
                  objectFit="cover"
                />
              </div>
              <p className="flex-1 text-sm self-center line-clamp-3">
                {item.title}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
