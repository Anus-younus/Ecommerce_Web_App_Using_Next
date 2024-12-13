import React from 'react'
import data_prouduct from "../data/data"
import Item from './Item'

const Poppular = () => {
    return (
        <div className='flex flex-col items-center gap-[10px]'>
            <h1 className='uppercase text-[#171717] text-[50px] font-medium'>Poppular in women</h1>
            <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]'/>
            <div className="mt-[50px] flex gap-[30px] flex-wrap items-center justify-center">
                {data_prouduct.map((item, i) => (
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

export default Poppular