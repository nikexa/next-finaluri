"use client";
import Image from 'next/image'
import React from 'react'
import instagramTitle from '../../Images/instagramTitle.png'
import microsoft from '../../Images/microsoft.png'
import googlePlay from '../../Images/googlePlay.png'
import FacebookLoginBtn from '@/app/Components/FacebookLoginBtn/FacebookLoginBtn';
import SingupForm from '@/app/Components/SingupForm/SingupForm';
import Link from 'next/link';
import Footer from '@/app/Components/Footer/Footer';


const page = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-white'> 
      <div className='w-[350px] h-[622px] border border-1 border-[#DBDBDB]'>
        <div className='flex h-[622px] items-center flex-col'>
          <Image className='w-auto h-auto mt-7 mb-2' src={instagramTitle} alt="" width={200} height={200} />
          <p className='text-[16px] text-[#737373] w-[270px] text-center mb-3'>Sign up to see photos and videos from your friends.</p>

          <FacebookLoginBtn/>
          
          <div className='w-[268px] flex items-center justify-center gap-4'>
            <div className='w-[107px] h-[1px] bg-[#DBDBDB]'></div>
            <p className='text-[13px] text-[#737373]'>OR</p>
            <div className='w-[107px] h-[1px] bg-[#DBDBDB]'></div>
          </div>

            <SingupForm/>


        </div>
      </div>

      <div className='w-[350px] h-[81px] flex justify-center items-center flex-col mt-3 border border-1 border-[#DBDBDB]'>
        <p className='text-[14px] text-black'>Have an account? </p>
        <Link className='text-[14px] text-[#0095F6]' href='/login'>Log in</Link>
      </div>


      <div className='flex justify-center items-center flex-col mt-5 gap-3
      '>
        <p className='text-[14px] text-black'>Get the app.</p>
        <div className='flex justify-center items-center gap-4'>
          <a target='_blank' href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D2A6B50CA-1C66-4FB0-8912-CAF2743D6EE7%26utm_campaign%3DsignupPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge"><Image src={googlePlay} alt='' width={134} height={40} /></a>
          <a target='_blank' href="https://apps.microsoft.com/detail/9nblggh5l9xt?hl=ka-GE&gl=GE"><Image src={microsoft} alt='' width={110} height={40} /></a>
        </div>
      </div>


      <Footer/>


    </div>

    
  )
}

export default page