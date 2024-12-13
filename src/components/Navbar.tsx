"use client"
import React, { useState } from 'react'
import logo from '../../public/logo.png'
import cart_icon from '../../public/cart_icon.png'
import Image from 'next/image'
import Link from 'next/link'
import { useShopContext } from '@/context/ShopContext'

const Navbar = () => {
  const { getTotalCartItem } = useShopContext()!
  const [menu, setMenu] = useState("shop")
  return (
    <div className='flex justify-between md:justify-around p-6 shadow-sm shadow-gray-300'>
      <div className='flex items-center gap-2'>
        <Image src={logo} alt='logo' className='h-10 w-10 md:h-16 md:w-16' />
        <p className='text-[#171717] text-2xl md:text-4xl font-semibold uppercase'>Shopper</p>
      </div>
      <ul className='hidden md:flex items-center list-none gap-12 text-[#626262] text-lg font-[500]'>
        <li onClick={() => { setMenu("shop") }} className='flex flex-col items-center justify-center gap-1 cursor-pointer'><Link href={"/"}>Shop</Link>{menu === "shop" ? <hr className='border-none w-[80%] h-1 rounded-lg bg-[#FF4141]' /> : <></>}</li>
        <li onClick={() => { setMenu("mens") }} className='flex flex-col items-center justify-center gap-1 cursor-pointer'><Link href={"/men"}>Men</Link> {menu === "mens" ? <hr className='border-none w-[80%] h-1 rounded-lg bg-[#FF4141]' /> : <></>}</li>
        <li onClick={() => { setMenu("womens") }} className='flex flex-col items-center justify-center gap-1 cursor-pointer'><Link href={"/women"}>Women</Link> {menu === "womens" ? <hr className='border-none w-[80%] h-1 rounded-lg bg-[#FF4141]' /> : <></>}</li>
        <li onClick={() => { setMenu("kids") }} className='flex flex-col items-center justify-center gap-1 cursor-pointer'><Link href={"/kid"}>Kids</Link> {menu === "kids" ? <hr className='border-none w-[80%] h-1 rounded-lg bg-[#FF4141]' /> : <></>}</li>
      </ul>
      <div className='hidden md:flex items-center gap-11'>
        <button className='w-[157px] h-14 outline-none border border-[#7a7a7a] rounded-[75px] text-[#515151] text-xl font-[500] bg-white cursor-pointer active:bg-[#f3f3f3]'><Link href={"/login"}>Login</Link></button>
        <Link href={"/cart"}><Image src={cart_icon} alt='cart_icon' width={30} height={30} /></Link>
        <div className='w-5 h-5 flex justify-center items-center rounded-full mt-[-21px] ml-[-57px] text-sm bg-red-700 text-white'>{getTotalCartItem()}</div>
      </div>
    </div>
  )
}

export default Navbar