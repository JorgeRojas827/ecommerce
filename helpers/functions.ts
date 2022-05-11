import { WritableDraft } from "immer/dist/internal"
import { ICartProduct } from '../interfaces/ICartProduct';

export const firstLetterUppercase = (s: string) => {
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export const removeLastLetter = (s: string) => {
    return s.substring(0, s.length - 1)
}

export const searchProductShoppingCart = (products: WritableDraft<ICartProduct>[], payload: ICartProduct) => {
    return products.find(e => e.name == payload.name && e.size == payload.size && e.color == payload.color)
}