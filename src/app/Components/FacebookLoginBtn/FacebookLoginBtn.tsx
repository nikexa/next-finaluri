"use client"
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../app/firebaseConfig";
import React, { useState } from "react";

const FacebookLoginBtn = () => {
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

  return (
    <button onClick={handleFacebookLogin} className="w-[268px] h-[34px] bg-[#0095F6] text-white rounded-[8px] flex justify-center items-center text-[14px] gap-2 mb-5">
      <FontAwesomeIcon className="size-[20px]" icon={faSquareFacebook} />
      Log in with Facebook
    </button>
  );
};

export default FacebookLoginBtn;
