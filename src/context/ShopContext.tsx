"use client"
import { createContext, ReactNode, useContext, useState } from "react"
import all_product from "@/data/all_product"
import { ProuductType } from "@/types/prouduct_type"

type ShopContextType = {
    all_product: ProuductType[],
    cartItem: number[],
    addToCart: (item: number | undefined) => void,
    removeToCart: (item: number | undefined) => void,
    getTotalCartAmount: () => number
    getTotalCartItem: () => number
}

const ShopContext = createContext<ShopContextType | null>(null)

const getDefaultCart = () => {
    let cart = [];
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0
    }
    return cart
}

export default function ShopContextProvider({ children }: { children: ReactNode }) {
    const [cartItem, setCartItem] = useState<number[]>(getDefaultCart())

    const addToCart = (itemId: number | undefined) => {
        setCartItem((prev) => ({ ...prev, [itemId as number]: prev[itemId as number] + 1 }))
    }
    const removeToCart = (itemId: number | undefined) => {
        setCartItem((prev) => ({ ...prev, [itemId as number]: prev[itemId as number] - 1 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0
        for (const item in cartItem) {
            if(cartItem[item] > 0) {
                let itemInfo = all_product.find((prouduct) => prouduct.id === Number(item))
                totalAmount += itemInfo?.new_price! * cartItem[item]
            }
        }
        return totalAmount
    }

    const getTotalCartItem = () => {
        let totalItem = 0
        for (const item in cartItem) {
            if(cartItem[item] > 0) {
                totalItem += cartItem[item]
            }
        }
        return totalItem
    }
    return (
        <ShopContext.Provider value={{ all_product, cartItem, addToCart, removeToCart, getTotalCartAmount, getTotalCartItem }}>
            {children}
        </ShopContext.Provider>
    )
}

export const useShopContext = () => useContext(ShopContext)