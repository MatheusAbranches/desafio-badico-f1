import { Navigation, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "./Carousel.css";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/autoplay";

import Slide from "./Slide/Slide";

import FlagBahrain from "../../img/flags/bahrain.png";
import FlagSpain from "../../img/flags/spain.png";
import FlagFrance from "../../img/flags/france.png";
import FlagBelgium from "../../img/flags/belgium.png";
import FlagItaly from "../../img/flags/italy.png";
import FlagJapan from "../../img/flags/japan.png";
import FlaEUA from "../../img/flags/eua.png";
import FlagAustria from "../../img/flags/austria.png";
import FlagSaudiArabia from "../../img/flags/saudiArabia.png";

export default () => {
  return (
    <div className="swiper-container">
      <Swiper
        height={500}
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={6.5}
        navigation
        autoplay={{ delay: 3000 }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Slide placeCalender={'BAHRAIN'} dayCalender={10} monthCalender={'APR'} src={FlagBahrain} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide placeCalender={'BAHRAIN'} dayCalender={20} monthCalender={'APR'} src={FlagBahrain} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide placeCalender={'SPAIN'} dayCalender={24} monthCalender={'MAY'} src={FlagSpain} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide placeCalender={'FRANCE'} dayCalender={31} monthCalender={'JUL'} src={FlagFrance} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide placeCalender={'BELGIUM'} dayCalender={28} monthCalender={'AUG'} src={FlagBelgium} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide  placeCalender={'ITALY'} dayCalender={4} monthCalender={'SEP'} src={FlagItaly} /> 
        </SwiperSlide>
        <SwiperSlide>
          <Slide  placeCalender={'JAPAN'} dayCalender={11} monthCalender={'SEP'} src={FlagJapan} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide  placeCalender={'EUA'} dayCalender={13} monthCalender={'SEP'} src={FlaEUA} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide  placeCalender={'AUSTRIA'} dayCalender={21} monthCalender={'SEP'} src={FlagAustria} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide  placeCalender={'SAUDI ARABIA'} dayCalender={27} monthCalender={'SEP'} src={FlagSaudiArabia} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
