import Image from 'next/image'
import React from 'react'
import screenshot1 from "../../Images/screenshot1.png";
import screenshot2 from "../../Images/screenshot2.png";
import screenshot3 from "../../Images/screenshot3.png";
import screenshot4 from "../../Images/screenshot4.png";
import PhonesOnDefalt from "../../Images/PhonesOnDefalt.png";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules';
import "swiper/css";
import "swiper/css/effect-fade";

const PhoneSwiper = () => {

    const Images = [
        {src: screenshot1 },
        {src: screenshot2 },
        {src: screenshot3 },
        {src: screenshot4 }
      ]

  return (
    <div
    className="w-[465px] h-[635px]"
    style={{
      backgroundImage: `url(${PhonesOnDefalt.src})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
  >
    <Swiper
      spaceBetween={30}
      effect="fade"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      allowTouchMove={false}
      modules={[EffectFade, Autoplay]}
      className="mySwiper w-[250px] h-[538px] mt-7 !ml-[155px]"
    >
      {Images.map((item)=>{
        return(
          <SwiperSlide key={item.src.src}>
            <Image
              className="w-[250px] h-[538px]"
              src={item.src}
              alt=""
              width={200}
              height={200}
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  </div>
  )
}

export default PhoneSwiper