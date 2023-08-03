// currency and river swiper
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface CurrencyAndRiverSwiperProps {
  dataCurrency: any[] | undefined;
  dataRiver: any[] | undefined;
}

export const CurrencyAndRiverSwiper: React.FC<CurrencyAndRiverSwiperProps> = ({
  dataCurrency,
  dataRiver,
}) => {
  return (
    <div>
      <h5 className="text-xl font-bold p-4 bg-gray-200">
        Cotización Moneda Extranjera
      </h5>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={1}
        slidesPerView={2}
        navigation
        className="border"
      >
        {dataCurrency
          ? dataCurrency.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center py-5">
                  <p>{item.casa.nombre}</p>
                  <div className="flex gap-3">
                    <span className="flex flex-col items-center">
                      <strong className="text-2xl">{item.casa.compra}</strong>{" "}
                      <small>Compra</small>
                    </span>
                    <span>
                      <strong className="text-2xl">/</strong>
                    </span>
                    <span className="flex flex-col items-center">
                      <strong className="text-2xl">{item.casa.venta}</strong>{" "}
                      <small>Venta</small>
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))
          : null}
      </Swiper>
    </div>
  );
};
