import ShopCategory from '@/components/ShopCategory'
import React from 'react'
import women_banner from "../../../public/banner_women.png"


const Womens = () => {
  return (
    <div>
        <ShopCategory category='women' banner={women_banner} />
    </div>
  )
}

export default Womens