"use client"
import { useShopContext } from '@/context/ShopContext'
import Image from 'next/image'
import React from 'react'
import remove_icon from "../../public/cart_cross_icon.png"

const CartItems = () => {
    const { all_product, cartItem, removeToCart, getTotalCartAmount } = useShopContext()!
    return (
        <div className='my-[100px] mx-[170px]'>
            <div className="flex justify-around items-center gap-[75px] py-[20px] px-0 text-[#454545] text-lg font-semibold">
                <p>Prouducts</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr className='h-1 bg-[#e2e2e2] border-[0]' />
            {all_product.map((e) => {
                if (cartItem[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="flex justify-around items-center gap-[75px] py-[20px] px-0 text-[#454545] text-[17px] font-medium">
                                <Image className='h-[62px] w-[55px]' src={e.image} alt={''} />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='w-[64px] h-[50px] border border-[#ebebeb] bg-white'>{cartItem[e.id]}</button>
                                <p>${e.new_price * cartItem[e.id]}</p>
                                <Image className='w-[15px] my-0 mx-[40px] cursor-pointer' src={remove_icon} onClick={() => { removeToCart(e.id) }} alt={''} />
                            </div>
                            <hr />
                        </div>
                    )
                }
                return null
            })}

            <div className="flex my-[100px] mx-0">
                <div className="flex-1 flex flex-col mr-[200px] gap-[40px]">
                    <h1 className="text-3xl font-semibold">Cart total</h1>
                    <div>
                        <div className='flex justify-between py-[15px] px-0'>
                            <p>Subtitle</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="flex justify-between py-[15px] px-0">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="flex justify-between py-[15px] px-0">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button className='uppercase w-[262px] h-[58px] outline-none border-none bg-[#ff5a5a] text-white text-base font-semibold cursor-pointer'>Proced to checkout</button>
                </div>
                <div className="flex-1 text-base font-medium">
                    <p className='text-[#555]'>If you have a promo code, Enter it here</p>
                    <div className='w-[504px] mt-[15px] pl-[20px] h-[58px] bg-[#eaeaea] flex'>
                        <input className='border-none outline-none bg-transparent text-base w-[330px] h-[50px]' type="text" placeholder='promo code' />
                        <button className='w-[170px] h-[58px] text-base bg-black text-white cursor-pointer'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems