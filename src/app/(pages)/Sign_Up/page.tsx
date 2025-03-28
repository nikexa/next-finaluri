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
    <div className='w-full min-h-screen flex flex-col justify-center items-center bg-white'> 
      <div className='w-[350px] min-h-[622px] border border-1 border-InputBorderColor mt-4 max-sm:border-0  '>
        <div className='flex min-h-[622px] items-center flex-col'>
          <Image className=' mt-7 mb-2' src={instagramTitle} alt="" width={200} height={200} />
          <p className='text-[16px] text-TextColor w-[270px] text-center mb-3'>Sign up to see photos and videos from your friends.</p>

          <FacebookLoginBtn variant="textOnly" />
          
          <div className='w-[268px] flex items-center justify-center gap-4'>
            <div className='w-[107px] h-[1px] bg-InputBorderColor'></div>
            <p className='text-[13px] text-TextColor'>OR</p>
            <div className='w-[107px] h-[1px] bg-InputBorderColor'></div>
          </div>

            <SingupForm/>


        </div>
      </div>

      <div className='w-[350px] h-[81px] flex justify-center items-center flex-col mt-3 border border-1 border-InputBorderColor max-sm:border-0' >
        <p className='text-[14px] text-black'>Have an account? </p>
        <Link className='text-[14px] text-BtnColor' href='/'>Log in</Link>
      </div>


      <div className='flex justify-center items-center flex-col mt-5 gap-3
      '>
        <p className='text-[14px] text-black'>Get the app.</p>
        <div className='flex justify-center items-center gap-4'>
          <a target='_blank' href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D2A6B50CA-1C66-4FB0-8912-CAF2743D6EE7%26utm_campaign%3DsignupPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge"><Image src={googlePlay} alt='' width={134} height={40} /></a>
          <a target='_blank' href="https://apps.microsoft.com/detail/9nblggh5l9xt?hl=ka-GE&gl=GE"><Image src={microsoft} alt='' width={110} height={40} /></a>
        </div>
      </div>


      <Footer variant='not'/>


    </div>

    
  )
}

export default page