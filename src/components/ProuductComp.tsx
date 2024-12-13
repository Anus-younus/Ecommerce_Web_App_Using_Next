import { ProuductType } from '@/types/prouduct_type'
import React from 'react'
import arrow_icon from "../../public/breadcrum_arrow.png"
import Image from 'next/image'

type ProuductCompType = {
    prouduct: ProuductType | undefined
}

const ProuductComp = ({ prouduct }:ProuductCompType) => {
  return (
    <div className='flex items-center gap-2 text-[#5e5e5e] text-base font-semibold my-[60px] mx-[170px] capitalize'>
        HOME <Image src={arrow_icon} alt='arrow_icon' /> SHOP <Image src={arrow_icon} alt='arrow_icon' /> {prouduct?.category} <Image src={arrow_icon} alt='arrow_icon'/> {prouduct?.name}
    </div>
  )
}

export default ProuductComp