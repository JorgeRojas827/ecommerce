import React, { Fragment } from 'react'
import { SummaryCard } from '../components/UI/SummaryCard'
import { useShoppingCart } from '../hooks/useShoppingCart'
import { IoCloseSharp } from 'react-icons/io5'

const summary = () => {
  const {
    shoppingCartProducts,
    detailCart: { count, subtotal },
  } = useShoppingCart()

  return (
    <div className="grid grid-cols-3 border-y border-[#303030] px-10">
      <div className="col-span-2 flex flex-col items-center justify-center py-10">
        <h1 className="w-4/5 text-3xl font-semibold">Order summary</h1>
        <div className="my-10 flex max-h-[288px] w-5/6 flex-col items-center space-y-5 overflow-scroll">
          {shoppingCartProducts.length > 0 ? (
            shoppingCartProducts.map((e, i) => {
              return (
                <Fragment key={i}>
                  <SummaryCard product={e} key={i} />
                </Fragment>
              )
            })
          ) : (
            <h2 className="my-10">No hay productos</h2>
          )}
        </div>
        <div className="w-4/5 border-t border-[#303030]">
          <div className="mt-4 flex flex-col space-y-4 px-3 text-lg">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>${subtotal}.00</p>
            </div>
            <div className="flex justify-between">
              <p>Delivery</p>
              <p>$10.00</p>
            </div>
            <div className="flex justify-between text-xl font-semibold">
              <p>Total</p>
              <p>${subtotal + 10}.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <h1>Credit card section</h1>
      </div>
    </div>
  )
}

export default summary
