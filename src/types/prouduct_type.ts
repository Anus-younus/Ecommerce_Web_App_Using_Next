import { StaticImageData } from "next/image";

export type ProuductType = {
    id: number,
    name: string,
    category: string,
    image: StaticImageData,
    new_price: number,
    old_price: number,
}