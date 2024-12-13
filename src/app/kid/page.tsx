import ShopCategory from '@/components/ShopCategory'
import React from 'react'
import kid_banner from "../../../public/banner_kids.png"


const Kids = () => {
  return (
    <div>
        <ShopCategory category='kid' banner={kid_banner} />
    </div>
  )
}

export default Kids