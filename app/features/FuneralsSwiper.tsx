// funerals swiper component
"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Modal } from "@/app/components/Modal";
import DeceasedInfo from "@/app/components/DeceasedInfo";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface Props {
  funerals: any[];
}

export const FuneralsSwiper: React.FC<Props> = ({ funerals }) => {
  const [openModal, setOpenModal] = React.useState(false);
  const [deceased, setDeceased] = React.useState<any>(null);

  const handleOpenModal = (item: any) => {
    setOpenModal(true);
    setDeceased(item);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Swiper
        modules={[Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={5}
        className={`flex flex-col gap-3 h-[100px]`}
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
            <div
              className="h-full flex items-center justify-center gap-3 px-3 py-5 bg-black text-white cursor-pointer hover:bg-opacity-90 transition-all"
              onClick={handleOpenModal.bind(null, item)}
            >
              <Image
                src="/images/imgCrossCardFunebre.b81ca149.svg"
                alt={item.title}
                width={30}
                height={50}
              />
              <p className="text-sm">{item.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Modal
        isOpen={openModal}
        onClose={handleCloseModal}
        className={
          "min-w-[90%] md:min-w-[500px] max-h-[80%] max-w-[500px]  overflow-y-auto rounded-none "
        }
      >
        <div className="flex justify-center items-center flex-col gap-3 bg-white p-5">
          <Image
            src={"/images/imgCrossFuneralNoticeBlack.svg"}
            alt="imagen cruz"
            className="w-100 h-100"
            width={27}
            height={43}
          />
          <DeceasedInfo deceased={deceased} />
        </div>
      </Modal>
    </>
  );
};
