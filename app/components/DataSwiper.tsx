import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface DataSwiperProps {
  data: any[] | undefined;
  children: React.ReactNode;
}

export const DataSwiper: React.FC<DataSwiperProps> = ({ data, children }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {data
        ? data.map((item, index) => (
            <SwiperSlide key={index}>{children}</SwiperSlide>
          ))
        : null}
    </Swiper>
  );
};
