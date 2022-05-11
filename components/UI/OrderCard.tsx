import React from 'react'
import { ICartProduct } from '../../interfaces/ICartProduct'
import { firstLetterUppercase } from '../../helpers/functions'
import { IoCloseSharp } from 'react-icons/io5'
import { useShoppingCart } from '../../hooks/useShoppingCart'

interface IProps {
  product: ICartProduct
}

export const OrderCard = ({ product }: IProps) => {
  const { image, cantity, color, name, price, size } = product
  const { removeProductFromCart } = useShoppingCart()

  return (
    <div className="relative grid grid-cols-3 place-content-center space-x-5">
      <div className="absolute top-12 grid w-3 place-content-center">
        <IoCloseSharp
          size={16}
          className="cursor-pointer"
          onClick={() => removeProductFromCart(product)}
        />
      </div>
      <figure>
        <img
          className="rounded-md"
          src={`http://localhost:1337${image}`}
          alt=""
        />
      </figure>
      <div className="col-span-2 flex flex-col justify-center space-y-2">
        <h4 className="font-semibold">{name}</h4>
        <div className="flex space-x-3">
          <h6>
            Size <span className="font-semibold">{size}</span>
          </h6>
          <h6>
            Color{' '}
            <span className="font-semibold">{firstLetterUppercase(color)}</span>
          </h6>
        </div>
        <h2>
          <span className="text-xl font-semibold">${price}.00</span> x
          <span className="ml-1 text-lg">0{cantity}</span>
        </h2>
      </div>
    </div>
  )
}
