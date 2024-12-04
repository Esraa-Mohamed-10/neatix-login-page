import React from "react";
import slider1Style from "./Slider1.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { EffectCreative } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

import slide1 from "../../assets/slide-1.webp";
import slide2 from "../../assets/slide-2.jpg";
import slide3 from "../../assets/slide-3.jpg";
import slide4 from "../../assets/slide-4.webp";

import { useTranslation } from 'react-i18next';
const Slider1 = () => {
  const { t, i18n } = useTranslation();
  const slides = [
    { id: 1, src: slide1, title:t('welcome') , text:t('welcomeText') },
    { id: 2, src: slide2, title:t('hello') ,text:t('helloText')  },
    { id: 3, src: slide3, title:t('ready') ,text:t('readyText') },
    { id: 4, src: slide4, title:t('start') ,text: t('startText') },
  ];

  const isRTL = i18n.language === "ar";

  return (
    <div className={slider1Style.slider_container} style={{ direction: i18n.language === isRTL ? "rtl" : "ltr" }}>
      <Swiper
      key={i18n.language} 
        loop={true}
        modules={[Pagination, EffectCreative]}
        pagination={{
          clickable: true,
        }}
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
        rtl={isRTL} 
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={slider1Style.slide}>
            <div className={slider1Style.slider_container}>
              <div className={slider1Style.slide_div}>
                <img
                  src={slide.src}
                  alt={slide.text}
                  className={`w-100 h-100 ${slider1Style.slide_img} `}
                />
              </div>
              <div className={slider1Style.text_overlay}>
                <p className={slider1Style.title} style={{ textAlign: isRTL ? "right" : "left" }}>{slide.title}</p>
                <p className={slider1Style.text} style={{ textAlign: isRTL ? "right" : "left" }}>{slide.text}</p>
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider1;
