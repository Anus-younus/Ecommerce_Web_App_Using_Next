import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

type ItemType = {
    id: number,
    image: StaticImageData,
    name: string,
    new_price: number,
    old_price: number
}

const Item = ({ image, name, new_price, old_price, id }: ItemType) => {
    return (
        <div className='w-[350px] hover:scale-95 transition-[.6s] mx-4'>
            <Link href={`/${id}`}><Image src={image} alt='image' /></Link>
            <p className='my-0 mx-6'>{name}</p>
            <div className="flex gap-7">
                <div className="text-[#374151] text-lg font-semibold">
                    ${new_price}
                </div>
                <div className="text-[#8c8c8c] text-lg font-medium line-through">
                    ${old_price}
                </div>
            </div>
        </div>
    )
}

export default Item