import React, { Fragment } from 'react'
import { useShoppingCart } from '../../hooks/useShoppingCart'
import { OrderCard } from '../UI/OrderCard'

export const Order = () => {
  const { shoppingCartProducts, detailCart } = useShoppingCart()

  return (
    <div className="absolute right-0 top-24 z-50 flex w-96 flex-col rounded-xl border border-[#303030] border-opacity-10 bg-white py-5 px-6 font-montserrat xl:-right-10">
      <h6 className="text-2xl font-semibold">Your order</h6>
      <div className="my-3 w-full border-t border-[#303030] border-opacity-10"></div>
      <div className="flex max-h-[350px] flex-col space-y-3 overflow-scroll overflow-x-hidden pr-1">
        {shoppingCartProducts.length > 0 ? (
          shoppingCartProducts.map((e, i) => {
            return (
              <Fragment key={i}>
                <OrderCard product={e} />
                {shoppingCartProducts.length != i + 1 ? (
                  <div className="w-full border-t border-[#303030] border-opacity-10"></div>
                ) : null}
              </Fragment>
            )
          })
        ) : (
          <h2 className="my-5 self-center">No hay productos</h2>
        )}
      </div>
      <div className="my-3 w-full border-t border-[#303030] border-opacity-10"></div>
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>${detailCart.subtotal}.00</p>
        </div>
        <div className="flex justify-between">
          <p>Delivery</p>
          <p>$10.00</p>
        </div>
        <div className="flex justify-between text-xl font-semibold">
          <p>Total</p>
          <p>${detailCart.subtotal + 10}.00</p>
        </div>
      </div>
    </div>
  )
}
