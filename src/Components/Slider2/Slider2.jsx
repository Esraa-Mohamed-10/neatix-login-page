import React from "react";
import slider2Style from "./Slider2.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";

import slide1 from "../../assets/slide-1.webp";
import slide2 from "../../assets/slide-2.jpg";
import slide3 from "../../assets/slide-3.jpg";
import slide4 from "../../assets/slide-4.webp";

import { Navigation } from "swiper/modules";

const Slider2 = () => {
  const slides = [
    { id: 1, src: slide1, text: "Slide 1" },
    { id: 2, src: slide2, text: "Slide 2" },
    { id: 3, src: slide3, text: "Slide 3" },
    { id: 4, src: slide4, text: "Slide 4" },
  ];

  return (
    <div className={slider2Style.slider_container}>
      <Swiper
        loop={true}
        navigation={true}
        modules={[Navigation, EffectCreative]}
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={slider2Style.slide}>
            <div className={slider2Style.slider_container}>
              <div className={slider2Style.slide_div}>
                <img
                  src={slide.src}
                  alt={slide.text}
                  className={`w-100 h-100 ${slider2Style.slide_img} `}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider2;
