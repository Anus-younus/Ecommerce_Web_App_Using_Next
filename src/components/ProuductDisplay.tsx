"use client"
import React, { useEffect } from 'react'
import { ProuductType } from '@/types/prouduct_type'
import Image, { StaticImageData } from 'next/image'
import star_icon from "../../public/star_icon.png"
import star_dull_icon from "../../public/star_dull_icon.png"
import { useShopContext } from '@/context/ShopContext'

type ProuductCompType = {
    prouduct: ProuductType | undefined
}

const ProuductDisplay = ({ prouduct }:ProuductCompType) => {
    const { addToCart, cartItem } = useShopContext()!

    useEffect(() => {
        console.log(cartItem)
    })
  return (
    <div className='flex my-[90px] mx-0'>
        <div className='flex gap-[17px] ml-5'>
            <div className="flex flex-col gap-4">
                <Image className='h-[135px] w-[25rem] cursor-pointer' src={prouduct?.image as StaticImageData} alt='prouduct_image' />
                <Image className='h-[135px] w-[25rem] cursor-pointer' src={prouduct?.image as StaticImageData} alt='prouduct_image' />
                <Image className='h-[135px] w-[25rem] cursor-pointer' src={prouduct?.image as StaticImageData} alt='prouduct_image' />
                <Image className='h-[135px] w-[25rem] cursor-pointer' src={prouduct?.image as StaticImageData} alt='prouduct_image' />
            </div>
            <div className="">
                <Image className='w-[95rem] h-[590px] cursor-pointer' src={prouduct?.image as StaticImageData} alt='prouduct_image'/>
            </div>
        </div>
        <div className='my-0 mx-[70px] flex flex-col'>
            <h1 className='text-[#3d3d3d] text-4xl font-bold'>{prouduct?.name}</h1>
            <div className="flex items-center mt-[7px] gap-[5px] text-[#1c1c1c] text-base">
                <Image src={star_icon} alt='star_icon' />
                <Image src={star_icon} alt='star_icon' />
                <Image src={star_icon} alt='star_icon' />
                <Image src={star_dull_icon} alt='star_dull_icon' />
                <p>(122)</p>
            </div>
            <div className="flex my-[25px] mx-0 gap-[30px] text-2xl font-bold">
                <div className="text-[#818181] line-through">${prouduct?.old_price}</div>
                <div className="text-[#ff4141]">${prouduct?.new_price}</div>
            </div>
            <div className="prouductdisplay-right-description">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores tempora doloremque magni, ut accusantium. Accusantium ut, sint nulla temporibus a aliquam ab deserunt cupiditate eum culpa unde assumenda odio.</p>
            </div>
            <div className="">
                <h1 className='mt-[20px] text-[#656565] text-xl font-semibold'>Select Size</h1>
                <div className='flex my-[30px] mx-0 gap-5'>
                    <div className='py-[18px] px-[24px] bg-[#dfdcdc] border-s-[#ebebeb] rounded-[3px] cursor-pointer'>S</div>
                    <div className='py-[18px] px-[24px] bg-[#dfdcdc] border-s-[#ebebeb] rounded-[3px] cursor-pointer'>M</div>
                    <div className='py-[18px] px-[24px] bg-[#dfdcdc] border-s-[#ebebeb] rounded-[3px] cursor-pointer'>L</div>
                    <div className='py-[18px] px-[24px] bg-[#dfdcdc] border-s-[#ebebeb] rounded-[3px] cursor-pointer'>XL</div>
                    <div className='py-[18px] px-[24px] bg-[#dfdcdc] border-s-[#ebebeb] rounded-[3px] cursor-pointer'>XXL</div>
                </div>
            </div>
            <button className='py-[20px] px-[40px] w-[250px] text-base font-semibold text-white bg-[#FF4142] border-none mb-[40px] outline-none cursor-pointer' onClick={() => {addToCart(prouduct?.id)}}>ADD TO CART</button>
            <p className="mt-[10px]"><span className='font-semibold'>Category : <span> Women , T-Shirt - Crop Top</span></span></p>
            <p className="mt-[10px]"><span className='font-semibold'>Tags : <span> Modern , Latest</span></span></p>
        </div>
    </div>
  )
}

export default ProuductDisplay