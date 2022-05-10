import React from 'react'
import { ICartProduct } from '../../interfaces/ICartProduct'
import { IoAdd, IoCloseSharp, IoRemove } from 'react-icons/io5'
import { useState } from 'react'
import { useShoppingCart } from '../../hooks/useShoppingCart'
import { firstLetterUppercase } from '../../helpers/functions'

interface IProps {
  product: ICartProduct
}

export const SummaryCard = ({ product }: IProps) => {
  const { image, cantity, color, name, price, size, category } = product
  console.log(product)

  var [newCantity, setCantity] = useState<number>(cantity)
  const { removeProductFromCart } = useShoppingCart()

  return (
    <div className="flex w-full justify-between">
      <div className=" grid w-3 place-content-center">
        <IoCloseSharp
          size={20}
          className="cursor-pointer"
          onClick={() => removeProductFromCart(product)}
        />
      </div>
      <figure className="pl-5">
        <img
          className="w-24 rounded-md"
          src={`http://localhost:1337${image}`}
          alt=""
        />
      </figure>
      <div className="grid place-content-center">
        <span className="w-40 font-semibold">{name}</span>
        {category}
      </div>
      <div className="grid place-content-center">{size}</div>
      <div className="flex items-center justify-center space-x-2">
        <div className="rounded-lg border border-[#303030] px-3 py-1">
          {newCantity}
        </div>
        <div className="flex flex-col space-y-1">
          <IoAdd
            onClick={() => setCantity(newCantity++)}
            className="cursor-pointer"
          />
          <IoRemove
            onClick={() => setCantity(newCantity--)}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="grid place-content-center">
        <span className="w-[54px]">{firstLetterUppercase(color)}</span>
      </div>
      <div className="grid place-content-center pr-3">${price}.00</div>
    </div>
  )
}
