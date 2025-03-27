"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import instagramTitle from "../app/Images/instagramTitle.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PhoneSwiper from "./Components/PhoneSwiper/PhoneSwiper";
import FacebookLoginBtn from "./Components/FacebookLoginBtn/FacebookLoginBtn";
import Link from "next/link";
import microsoft from "../app/Images/microsoft.png";
import googlePlay from "../app/Images/googlePlay.png";
import Footer from "./Components/Footer/Footer";
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import {auth} from '../app/firebaseConfig'
import { useRouter } from "next/navigation";

 
const schema = yup.object().shape({
  gmail:
    yup.string().email().required("Enter a valid email address.") ||
    yup.number().min(6).required(),
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
      "Create a password at least 6 characters long."
    ),
});

interface IFormData {
  gmail: string;
  password: string;
}

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth)
  const router = useRouter();

  const onSubmit =async (data: any) => {
    try{
      const res = await signInWithEmailAndPassword(data.gmail, data.password)
      console.log({res})
      if(res){
        router.push('/Account')
      }
      else{
        console.log('xvbxzsdvb')
      }
    }catch(e){
      console.error(e)

    }
    // console.log(data);
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
    <div className="w-full h-screen flex flex-col justify-center items-center ">
      <div className="flex justify-center items-center pt-20">
        <PhoneSwiper />

        <div className="flex flex-col gap-3 mt-[-60px]">
          <div>
            <div className="w-[350px] h-[410px] border border-1 border-[#DBDBDB] mt-4 flex flex-col items-center">
              <Image
                className=" mt-7 mb-2"
                src={instagramTitle}
                alt=""
                width={200}
                height={200}
              />

              <form
                className="flex flex-col gap-3 mt-4"
                onSubmit={handleSubmit(onSubmit)}
              >
                {inputs.map((item) => {
                  return (
                    <div key={item.iden} className="relative w-[258px]">
                      <input
                        {...register(item.iden)}
                        id={item.iden}
                        type={
                          item.type === "password" && showPassword
                            ? "text"
                            : item.type
                        }
                        value={formData[item.iden]}
                        onChange={(e) => {
                          console.log(item.iden);
                          setFormData({
                            ...formData,
                            [item.iden]: e.target.value,
                          });
                        }}
                        className={`peer w-full h-[38px] border border-[#DBDBDB] bg-[#FAFAFA] text-black rounded-[3px] placeholder-transparent outline-none text-[12px] pl-3 pt-3 ${
                          errors[item.iden] && "border-[#FF3040]"
                        }`}
                      />
                      <label
                        htmlFor={item.iden}
                        className={`absolute left-2 top-3 text-TextColor px-1 transition-all text-[12px]
          ${formData[item.iden] ? "top-[1px] text-[9px] pt-0.5" : ""}`}
                      >
                        {item.name}
                      </label>
                      {item.name === "Password" && formData[item.iden] && (
                        <button
                          type="button"
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="absolute right-2 top-3 text-TextColor text-[12px]"
                        >
                          {showPassword ? "Hide" : "Show"}
                        </button>
                      )}
                      {errors[item.iden] && (
                        <p className="text-[#FF3040] text-[12px] pl-3 pt-1">
                          {errors[item.iden]?.message}
                        </p>
                      )}
                    </div>
                  );
                })}

                <button className="mt-2 w-[268px] h-[32px] bg-BtnColor opacity-65 rounded-lg text-[14px] text-TextWhite">
                  Log in
                </button>
              </form>

              <div className="w-[268px] flex items-center justify-center gap-4 mt-5">
                <div className="w-[107px] h-[1px] bg-InputBorderColor"></div>
                <p className="text-[13px] text-TextColor">OR</p>
                <div className="w-[107px] h-[1px] bg-InputBorderColor"></div>
              </div>

              <FacebookLoginBtn variant="filled" />

              <p className="text-LinkColor text-[14px] cursor-pointer">
                Forgotten your password?
              </p>
            </div>
          </div>

          <div className="w-[350px] h-[68px] border border-1 border-InputBorderColor flex justify-center items-center">
            <p className="text-TextBlack text-[14px]">
              Don't have an account?
              <Link className="text-BtnColor" href="/Sign_Up">
                {" "}
                Sign up
              </Link>
            </p>
          </div>

          <div className="flex justify-center items-center flex-col mt-1">
            <p className="text-TextBlack text-[14px]">Get the app.</p>
            <div className="flex justify-center items-center gap-4 mt-3">
              <Link
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D2A6B50CA-1C66-4FB0-8912-CAF2743D6EE7%26utm_campaign%3DsignupPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge"
              >
                <Image src={googlePlay} alt="" width={134} height={40} />
              </Link>
              <Link
                target="_blank"
                href="https://apps.microsoft.com/detail/9nblggh5l9xt?hl=ka-GE&gl=GE"
              >
                <Image src={microsoft} alt="" width={110} height={40} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer variant="margined"/>

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
