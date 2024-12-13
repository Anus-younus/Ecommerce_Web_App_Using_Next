import ShopCategory from '@/components/ShopCategory'
import React from 'react'
import men_banner from "../../../public/banner_mens.png"


const Mens = () => {
  return (
    <div>
        <ShopCategory category='men' banner={men_banner} />
    </div>
  )
}

export default Mens