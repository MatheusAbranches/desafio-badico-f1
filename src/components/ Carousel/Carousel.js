import { Navigation, Autoplay, } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "./Carousel.css";
import "swiper/css";
// import "swiper/css/navigation";
import 'swiper/css/autoplay'


import Slide from "./Slide/Slide";

export default () => {
  return (
    <div className="swiper-container">
      <Swiper
        height={500}
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={6.5}
        navigation
        autoplay={{delay: 3000,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          {" "}
          <Slide />{" "}
        </SwiperSlide>
        <SwiperSlide><Slide /></SwiperSlide>
        <SwiperSlide><Slide /></SwiperSlide>
        <SwiperSlide><Slide /></SwiperSlide>
        <SwiperSlide><Slide /></SwiperSlide>
        <SwiperSlide><Slide /></SwiperSlide>
        <SwiperSlide><Slide /></SwiperSlide>
      </Swiper>
    </div>
  );
};
