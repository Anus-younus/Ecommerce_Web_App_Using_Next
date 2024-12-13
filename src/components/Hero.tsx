import Image from 'next/image'
import React from 'react'
import hand_icon from "../../public/hand_icon.png"
import hero_img from "../../public/hero_image.png"
import { FaArrowRight } from "react-icons/fa";


const Hero = () => {
  return (
    <div style={{background: "linear-gradient(180deg, #fde1ff, #e1ffea22 60%)"}} 
    className='h-[100vh] flex'>
        <div className='flex-1 flex flex-col justify-center pl-44 leading-[1.1] gap-5'>
            <h2 className='uppercase text-[#090909] text-2xl font-semibold'>New arrivals only</h2>
            <div>
                <div className='flex items-center gap-5'>
                    <p className='text-[#171717] text-8xl font-semibold'>new</p>
                    <Image className='w-[105px]' src={hand_icon} alt='hand_icon' width={60} height={60} />
                </div>
                <p className='text-[#171717] text-8xl font-semibold'>collection</p>
                <p className='text-[#171717] text-8xl font-semibold'>for everyone</p>
            </div>
            <div className='cursor-pointer flex justify-center items-center gap-4 w-[310px] h-[70px] rounded-[75px] mt-[30px] bg-[#ff4141] text-white text-[22px] font-[500]'>
                <div>Latest Collection</div>
                <FaArrowRight />
            </div>
        </div>
        <div className='flex-1 flex items-center justify-center'>
            <Image src={hero_img} alt='hero_img' width={300} height={300} />
        </div>
    </div>
  )
}

export default Hero