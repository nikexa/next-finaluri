"use client";
import Link from "next/link";
import React, { useState } from "react";

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

  const inputs: { name: string; iden: keyof IFormData; type: string }[] = [
    { name: "Mobile number or email address", iden: "gmail", type: "text" },
    { name: "Password", iden: "password", type: "password" },
    { name: "Full Name", iden: "fullname", type: "text" },
    { name: "Username", iden: "username", type: "text" },
  ];

  return (
    <div className="w-[268px] ">
      <form className="relative w-[268px] mt-6 flex flex-col gap-2">
        {inputs.map((item) => {
          return (
            <div key={item.iden} className="relative ">
              <input
                id={item.iden}
                type={
                  item.type === "password" && showPassword ? "text" : item.type
                }
                value={formData[item.iden]}
                onChange={(e) =>
                  setFormData({ ...formData, [item.iden]: e.target.value })
                }
                placeholder={item.name}
                className={`peer w-full h-[38px] border border-[#DBDBDB] bg-[#FAFAFA] text-black rounded-[3px] placeholder-transparent outline-none text-[12px] pl-3 pt-3`}
              />
              <label
                htmlFor={item.iden}
                className={`absolute left-2 top-3 text-gray-500 px-1 transition-all text-[12px]
                ${formData[item.iden] ? "top-[1px] text-sm text-[9px]" : ""}`}
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
            </div>
          );
        })}

        <p className="text-[12px] text-[#737373] text-center mt-2">
          People who use our service may have uploaded your contact information
          to Instagram.{" "}
          <a
            className="text-[12px] text-[#00376B]"
            href="https://www.facebook.com/help/instagram/261704639352628?next=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Ft%2F17850288137505910%2F%3F__coig_login%3D1"
            target="_blank"
          >
            Learn more
          </a>
        </p>

        <p className="text-[12px] text-[#737373] text-center mt-2">
          By signing up, you agree to our{" "}
          <a
            className="text-[12px] text-[#00376B]"
            target="_blank"
            href="https://help.instagram.com/581066165581870/?locale=en_GB&next=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Ft%2F17850288137505910%2F%3F__coig_login%3D1"
          >
            Terms
          </a>
          ,{" "}
          <a
            className="text-[12px] text-[#00376B]"
            target="_blank"
            href="https://www.facebook.com/privacy/policy?next=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Ft%2F17850288137505910%2F%3F__coig_login%3D1"
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            className="text-[12px] text-[#00376B]"
            target="_blank"
            href="https://privacycenter.instagram.com/policies/cookies/"
          >
            Cookies Policy.
          </a>
        </p>


        <button className="w-full h-[32px] bg-[#0095F6] text-white rounded-[8px] text-[14px] opacity-65 mt-2">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
