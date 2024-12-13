import React from 'react'
import new_collection from "../data/new_collections"
import Item from './Item'

const NewCollection = () => {
    return (
        <div className='flex flex-col items-center gap-[10px]'>
            <h1 className="uppercase text-[#171717] text-[50px] font-medium">new collection</h1>
            <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]' />
            <div className="mb-[150px] mt-[50px] flex gap-[30px] flex-wrap items-center justify-center">
                {new_collection.map((item, i) => (
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

export default NewCollection