import React from 'react'
import footer_logo from "../../public/logo_big.png"
import Image from 'next/image'
import intagram_icon from "../../public/instagram_icon.png"
import pintester_icon from "../../public/pintester_icon.png"
import whatsaap_icon from "../../public/whatsapp_icon.png"

const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-[50px]'>
            <div className="flex items-center gap-5">
                <Image src={footer_logo} alt='footer_logo' width={60} height={60} />
                <p className='uppercase text-[#383838] text-5xl font-bold'>Shopper</p>
            </div>
            <ul className="flex list-none gap-[50px] text-[#252525] text-xl">
                <li className='cursor-pointer'>Company</li>
                <li className='cursor-pointer'>Prouducts</li>
                <li className='cursor-pointer'>Offices</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Contact</li>
            </ul>
            <div className="flex gap-[20px]">
                <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border-sm border-[#ebebeb]">
                    <Image src={intagram_icon} alt="intagram_icon" width={30} height={30} />
                </div>
                <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border-sm border-[#ebebeb]">
                    <Image src={pintester_icon} alt="pintester_icon" width={30} height={30} />
                </div>
                <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border-sm border-[#ebebeb]">
                    <Image src={whatsaap_icon} alt="whatsaap_icon" width={30} height={30} />
                </div>
            </div>
            <div className="flex flex-col items-center gap-[30px] w-full mb-[30px] text-[#1a1a1a] text-[20px]">
                <hr className='w-[80%] border-none rounded-[10px] h-[3px] bg-[#c7c7c7]' />
                <p>Copyright @ 2024 - All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer