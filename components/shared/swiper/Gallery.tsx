import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Cheese from "../../../public/image/Cheese.jpg";
import oil from "../../../public/image/oil.jpg";
import qamar from "../../../public/image/qamar.png";
import woraq from "../../../public/image/woraq.jpg";
import { galleryImages } from "@/constants";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "./swiper.css";
import ScrollAppear from "../ScrollAppear";
const Gallery = () => {
  return (
    <ScrollAppear>
      <div className="container m-auto">
        <h1 className="heading">ما نقدمه</h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            //   clickable: true,
          }}
          scrollbar={{
            el: ".swiper-scrollbar",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {galleryImages.map((el: any) => {
            return (
              <SwiperSlide key={el}>
                <Image src={el} alt="slide_image" width={200} height={300} />
              </SwiperSlide>
            );
          })}
          <div className="slider-controler">
            {/* <div className="swiper-button-prev slider-arrow"></div>
            <div className="swiper-button-next slider-arrow"></div> */}
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </ScrollAppear>
  );
};

export default Gallery;
