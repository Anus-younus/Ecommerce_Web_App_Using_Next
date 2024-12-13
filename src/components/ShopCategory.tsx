"use client"
import { useShopContext } from '@/context/ShopContext'
import Image, { StaticImageData } from 'next/image'
import React, { useEffect } from 'react'
import dropdown_icon from "../../public/dropdown_icon.png"
// import all_Prouduct from "@/data/all_prouducts"
import Item from './Item'


type ShopCategoryType = {
  category: "men" | "women" | "kid",
  banner: StaticImageData
}

const ShopCategory = ({ category, banner }: ShopCategoryType) => {
  const { all_product } = useShopContext()!

  return (
    <div className='shop-category'>
      <Image className='block mx-8 my-auto w-[82%]' src={banner} alt="banner" />
      <div className="flex mx-[170px] my-0 justify-between items-center">
        <p className='font-semibold'>
          <span className='font-semibold'>Showing 1-12</span> out of 36 prouducts
        </p>
        <div className='px-3 py-5 rounded-full border-s-[#888] flex items-center gap-4'>
          Sort by <Image src={dropdown_icon} alt='dropdown_icon' />
        </div>
      </div>
      <div className='mx-5 my-[170px] flex flex-wrap justify-center items-center'>
        {all_product.map((item, i) => {
          if (category === item.category) {
            return <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          } else {
            return null
          }
        })}
      </div>
      <div className="flex justify-center items-center my-[150px] mx-auto w-[233px] h-[69px] rounded-3xl bg-[#ededed] text-[#787878] text-lg font-medium">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory