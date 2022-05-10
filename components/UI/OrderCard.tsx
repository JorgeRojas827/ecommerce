import React from 'react'
import { ICartProduct } from '../../interfaces/ICartProduct'
import { firstLetterUppercase } from '../../helpers/functions'

interface IProps {
  product: ICartProduct
}

export const OrderCard = ({
  product: { image, cantity, color, name, price, size },
}: IProps) => {
  return (
    <div className="grid grid-cols-3 place-content-center space-x-5">
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
