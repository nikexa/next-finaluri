"use client"
import { faFacebook, faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../app/firebaseConfig";
import React, { useState } from "react";

const FacebookLoginBtn = ({ variant = "filled" }) => {
  const [user, setUser] = useState<null | any>(null);

  const handleFacebookLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const isFilled = variant === "filled";

  return (
    <button onClick={handleFacebookLogin} className={`w-[268px] h-[34px] ${isFilled ? "text-BtnColor bg-TextWhite mt-3" : "text-TextWhite bg-BtnColor"}  rounded-[8px] flex justify-center items-center text-[14px] gap-2 mb-5`}>
      <FontAwesomeIcon className="size-[20px]" icon={isFilled ? faFacebook : faSquareFacebook} />
      Log in with Facebook
    </button>
  );
};

export default FacebookLoginBtn;
