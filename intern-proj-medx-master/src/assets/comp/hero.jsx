import {useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css"
import "swiper/css/navigation";
import "swiper/css/pagination";

function Hero() {
    return(
      <>
            <Swiper
                // spaceBetween={20}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper my-1"
                
            >
                <SwiperSlide>
                    <img
                        className="object-fill h-80 m-auto rounded-[40px]"
                        src="https://cdn.discordapp.com/attachments/1038025122369503282/1039427777436332062/png_20221108_120331_0000.png"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill h-80 m-auto rounded-[40px]"
                        src="https://cdn.discordapp.com/attachments/1038025122369503282/1039619125808476270/png_20221109_001554_0000.png"
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill h-80 m-auto rounded-[40px]"
                        src="https://cdn01.pharmeasy.in/dam/banner/banner/0bac91892cd-devices.jpg"
                        alt="image slide 3"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill h-80 m-auto rounded-[40px]"
                        src="https://cdn01.pharmeasy.in/dam/banner/banner/0cf5d7f710b-MintopSRM.jpg"
                        alt="image slide 3"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Hero
