import data_product from '@/data/data'
import React from 'react'
import Item from './Item'

const RelatedProuducts = () => {
  return (
    <div className='flex flex-col items-center gap-[10px] h-[90vh]'>
        <h1 className='text-[#171717] text-5xl font-semibold'>Related Prouducts</h1>
        <hr className='w-[200px] h-2 rounded-xl bg-[#252525]' />
        <div className='mt-[50px] flex gap-[30px] items-center justify-center flex-wrap'>
            {data_product.map((item, i) => (
                <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
            />
            ))}
        </div>
    </div>
  )
}

export default RelatedProuducts