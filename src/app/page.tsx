"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";
import PhonesOnDefalt from "../app/Images/PhonesOnDefalt.png";
import screenshot1 from "../app/Images/screenshot1.png";
import screenshot2 from "../app/Images/screenshot2.png";
import screenshot3 from "../app/Images/screenshot3.png";
import screenshot4 from "../app/Images/screenshot4.png";
import instagramTitle from "../app/Images/instagramTitle.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

const schema = yup.object().shape({
  gmail: yup.string().email().required("Enter a valid email address.") || yup.number().min(6).required(),
  password: yup.string().required().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/ , "Create a password at least 6 characters long."),
})


interface IFormData {
  gmail: string;
  password: string;
}

export default function Home() {

  const {register , handleSubmit , formState:{errors}}= useForm({resolver : yupResolver(schema)})

  function onSubmit(data : any) {
    console.log(data)
  }


  const inputs: { name: string; iden: keyof IFormData; type: string }[] = [
    { name: "Mobile number or email address", iden: "gmail", type: "text" },
    { name: "Password", iden: "password", type: "password" },
  ];


    const [formData, setFormData] = useState<any>({
      gmail: "",
      password: "",
    });
    const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full h-screen flex justify-center items-center ">
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
          <SwiperSlide>
            <Image
              className="w-[250px] h-[538px]"
              src={screenshot1}
              alt=""
              width={200}
              height={200}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="w-[250px] h-[538px]"
              src={screenshot2}
              alt=""
              width={200}
              height={200}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="w-[250px] h-[538px]"
              src={screenshot3}
              alt=""
              width={200}
              height={200}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="w-[250px] h-[538px]"
              src={screenshot4}
              alt=""
              width={200}
              height={200}
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div>
        <div className="w-[350px] h-[410px] border border-1 border-[#DBDBDB] mt-4 flex flex-col items-center">
        <Image className=' mt-7 mb-2' src={instagramTitle} alt="" width={200} height={200} />

        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          {inputs.map((item)=>{
            return(
              <div key={item.iden} className="relative w-[258px]">
              <input
              {...register(item.iden)}
                id={item.iden}
                type={
                  item.type === "password" && showPassword ? "text" : item.type
                }
                value={formData[item.iden]}
                onChange={(e) =>{
                  console.log(item.iden)
                  setFormData({ ...formData, [item.iden]: e.target.value})}
                }
                placeholder={item.name}
                className={`peer w-full h-[38px] border border-[#DBDBDB] bg-[#FAFAFA] text-black rounded-[3px] placeholder-transparent outline-none text-[12px] pl-3 pt-3 ${errors[item.iden] && "border-[#FF3040]"}`}
              />
              <label
                htmlFor={item.iden}
                className={`absolute left-2 top-3 text-gray-500 px-1 transition-all text-[12px]
                ${formData[item.iden] ? "top-[1px] text-[9px] pt-0.5" : ""}`}
              >
                {item.name}
              </label>
              {item.name === "Password" && formData[item.iden] && (
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-2 top-3 text-gray-500 text-[12px]"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              )}
              {errors[item.iden] && <p className="text-[#FF3040] text-[12px] pl-3 pt-1">{errors[item.iden]?.message}</p>}
            </div>
            )
          })}

          <button className="mt-5">click</button>

        </form>

        </div>
      </div>
    </div>

    // <Swiper
    //   spaceBetween={30}
    //   effect="fade"
    //   autoplay={{
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   }}
    //   loop={true}
    //   allowTouchMove={false}
    //   modules={[EffectFade, Autoplay]}
    //   className="mySwiper w-full h-[400px]"
    // >
    //   <SwiperSlide>
    //     <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature 1" />
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature 2" />
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Nature 3" />
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Nature 4" />
    //   </SwiperSlide>
    // </Swiper>
  );
}
