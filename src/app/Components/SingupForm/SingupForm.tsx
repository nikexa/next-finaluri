"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
 import {auth} from '../../../app/firebaseConfig'

const schema = yup.object().shape({
  gmail: yup.string().email().required("Enter a valid email address.") || yup.number().min(6).required(),
  password: yup.string().required().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/ , "Create a password at least 6 characters long."),
  fullname: yup.string().required().matches(/\b[a-zA-ZÀ-ÿ]+\s[A-ZÀ-ÿ][a-zA-ZÀ-ÿ'-]{2,}\b/ , "Full name must contain at least 2 words"),
  username: yup.string().required("Username is required")
})


interface IFormData {
  gmail: string;
  password: string;
  fullname: string;
  username: string;
}

const SignupForm = () => {
  const [formData, setFormData] = useState<IFormData>({
    gmail: "",
    password: "",
    fullname: "",
    username: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)

  const inputs: { name: string; iden: keyof IFormData; type: string }[] = [
    { name: "Mobile number or email address", iden: "gmail", type: "text" },
    { name: "Password", iden: "password", type: "password" },
    { name: "Full Name", iden: "fullname", type: "text" },
    { name: "Username", iden: "username", type: "text" },
  ];

  const {register , handleSubmit , formState: {errors}} = useForm<IFormData>({ resolver: yupResolver(schema) })

  // console.log(inputs)
  // console.log(errors)

  const router = useRouter();

  const onSubmit = async (data: IFormData) => {
    try{
      const res = await createUserWithEmailAndPassword(data.gmail, data.password)
      console.log({res})
    }catch(e){
      console.error(e)
    }
    // console.log(data);
    // router.push('/');
  }

  return (
    <div className="w-[268px] ">
      <form onSubmit={handleSubmit(onSubmit)} className="relative w-[268px] mt-6 flex flex-col gap-2">
        {inputs.map((item) => {
          return (
            <div key={item.iden} className="relative ">
              <input
              {...register(item.iden)}
                id={item.iden}
                type={
                  item.type === "password" && showPassword ? "text" : item.type
                }
                value={formData[item.iden]}
                onChange={(e) =>{
                  // console.log(item.iden)
                  setFormData({ ...formData, [item.iden]: e.target.value})}
                }
                className={`peer w-full h-[38px] border border-InputBorderColor bg-InputBgColor text-TextBlack rounded-[3px] placeholder-transparent outline-none text-[12px] pl-3 pt-3 ${errors[item.iden] && "border-ErrorColor"}`}
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
              {errors[item.iden] && <p className="text-ErrorColor text-[12px] pl-3 pt-1">{errors[item.iden]?.message}</p>}
            </div>
          );
        })}

        <p className="text-[12px] text-TextColor text-center mt-2">
          People who use our service may have uploaded your contact information
          to Instagram.{" "}
          <a
            className="text-[12px] text-LinkColor"
            href="https://www.facebook.com/help/instagram/261704639352628?next=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Ft%2F17850288137505910%2F%3F__coig_login%3D1"
            target="_blank"
          >
            Learn more
          </a>
        </p>

        <p className="text-[12px] text-TextColor text-center mt-2">
          By signing up, you agree to our{" "}
          <a
            className="text-[12px] text-LinkColor"
            target="_blank"
            href="https://help.instagram.com/581066165581870/?locale=en_GB&next=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Ft%2F17850288137505910%2F%3F__coig_login%3D1"
          >
            Terms
          </a>
          ,{" "}
          <a
            className="text-[12px] text-LinkColor"
            target="_blank"
            href="https://www.facebook.com/privacy/policy?next=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Ft%2F17850288137505910%2F%3F__coig_login%3D1"
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            className="text-[12px] text-LinkColor"
            target="_blank"
            href="https://privacycenter.instagram.com/policies/cookies/"
          >
            Cookies Policy.
          </a>
        </p>


        <button className="w-full h-[32px] bg-BtnColor text-TextWhite rounded-[8px] text-[14px] opacity-65 mt-2 mb-5">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
