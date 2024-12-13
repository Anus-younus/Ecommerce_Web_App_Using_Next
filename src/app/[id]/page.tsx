import React from 'react'
import all_product from "../../data/all_product"
import ProuductComp from '@/components/ProuductComp'
import ProuductDisplay from '@/components/ProuductDisplay'
import Description from '@/components/Description'
import RelatedProuducts from '@/components/RelatedProuducts'

type PropType = {
  params: {
    id: string
  }
}

const Prouduct = ({ params: { id } }: PropType) => {
  const prouduct = all_product.find((data) => data.id == Number(id))
  return (
    <div className='h-[400vh]'>
      <ProuductComp prouduct={prouduct} />
      <ProuductDisplay prouduct={prouduct} />
      <Description />
      <RelatedProuducts />
    </div>
  )
}

export default Prouduct
