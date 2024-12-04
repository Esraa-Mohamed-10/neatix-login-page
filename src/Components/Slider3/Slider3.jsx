import React from 'react'
import slider3 from './slider3Style.module.css'

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube , Pagination ,  EffectFlip} from "swiper/modules";
import { EffectCreative } from "swiper/modules";

import "swiper/css";
// import 'swiper/css/effect-cube';
import 'swiper/css/effect-flip';
import "swiper/css/pagination";

import slide1 from "../../assets/slide-1.webp";
import slide2 from "../../assets/slide-2.jpg";
import slide3 from "../../assets/slide-3.jpg";
import slide4 from "../../assets/slide-4.webp";

const Slider3 = () => {
    
    const slides = [
        { id: 1, src: slide1, text: "Slide 1" },
        { id: 2, src: slide2, text: "Slide 2" },
        { id: 3, src: slide3, text: "Slide 3" },
        { id: 4, src: slide4, text: "Slide 4" },
      ];
    
      return (
        <div className={slider3.slider_container}>
          <Swiper
            loop={true}
            modules={[ EffectFlip ,Pagination, EffectCube]}
            pagination={{
              clickable: true,
            }}
            grabCursor={true}
            effect={'flip'}
            // effect={"cube"}
            // cubeEffect={{
            //     shadow: true,
            //     slideShadows: true,
            //     shadowOffset: 20,
            //     shadowScale: 0.94,
            //   }}
            className="mySwiper"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id} className={slider3.slide}>
                <div className={slider3.slider_container}>
                  <div className={slider3.slide_div}>
                    <img
                      src={slide.src}
                      alt={slide.text}
                      className={`w-100 h-100 ${slider3.slide_img} `}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );
}

export default Slider3