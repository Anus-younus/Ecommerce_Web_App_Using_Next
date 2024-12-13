import Image from 'next/image'
import React from 'react'
import exclusive_image from "../../public/exclusive_image.png"

const Offers = () => {
  return (
    <div style={{background: "linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%)"}} 
    className='w-[80%] h-[100vh] flex m-auto px-2 mt- py-[140px] mb-[150px]'>
        <div className="flex-1 flex flex-col justify-center">
            <h1 className='text-[#171717] text-[80px] font-semibold'>Exclusive</h1>
            <h1 className='text-[#171717] text-[80px] font-semibold'>Offers for you</h1>
            <p className='uppercase text-[#171717] text-[22px] font-semibold'>only on best seller prouduct</p>
            <button className='w-[282px] h-[70px] p-4 rounded-[35px] bg-[#ff4141] border-none text-white text-[22px] font-medium mt-[30px] cursor-pointer'>Check Now</button>
        </div>
        <div className="flex-1 flex items-center justify-end pt-[50px]">
            <Image src={exclusive_image} alt={'exclusive_image'} />
        </div>
    </div>
  )
}

export default Offers