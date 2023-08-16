// swiper fullscreen component
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { PostProps } from "@/types";

import { CardHighlight } from "./CardHighlight";

interface SwiperFullscreenProps {
  posts: PostProps[];
  className?: string;
}

export const SwiperFullscreen: React.FC<SwiperFullscreenProps> = ({
  posts,
  className,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (posts.length === 0) {
    return null;
  }

  return mounted && posts.length > 0 ? (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={12}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className={`flex flex-col gap-3 ${className}`}
    >
      {posts.map((post) => (
        <SwiperSlide key={post._id}>
          <CardHighlight
            item={{
              title: post.title,
              flywheel: post.flywheel,
              image: post.images[0],
              category: post.category,
              slug: post.slug,
              liveSports: post.liveSports,
            }}
            className="col-span-2 h-full"
            fullWidth
          />
        </SwiperSlide>
      ))}
    </Swiper>
  ) : null;
};
