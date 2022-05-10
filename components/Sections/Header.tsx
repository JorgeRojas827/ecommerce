import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiChevronDown } from 'react-icons/hi'
import { useShoppingCart } from '../../hooks/useShoppingCart'
import { Order } from './Order'
import { useState } from 'react'

export const Header = () => {
  const [showCart, setShowCart] = useState(false)
  const { detailCart } = useShoppingCart()

  const toggleShowCart = () => {
    setShowCart(!showCart)
  }

  return (
    <header className="mx-auto max-w-7xl">
      <nav className="relative flex items-center justify-between py-5 px-10 ">
        <ul className="hidden space-x-32 font-montserrat font-semibold uppercase md:flex xl:space-x-48">
          <Link href="/shop">
            <li className="cursor-pointer">Shop</li>
          </Link>
          <Link href="/featured">
            <li className="cursor-pointer">Featured</li>
          </Link>
        </ul>
        <figure className="h-16 w-16">
          <Link href="/">
            <img
              className="cursor-pointer transition duration-150 ease-in-out hover:scale-110"
              src="/assets/logo.png"
            />
          </Link>
        </figure>
        <ul className="relative hidden space-x-32 font-montserrat font-semibold uppercase md:flex xl:space-x-48">
          <Link href="/objetive">
            <li className="cursor-pointer">Objetive</li>
          </Link>
          <li className="flex cursor-pointer items-center">
            <Link href="/summary">
              <a>Cart ({detailCart.count})</a>
            </Link>
            <HiChevronDown onClick={toggleShowCart} className="ml-3" />
          </li>
        </ul>
        <figure className="block md:hidden">
          <GiHamburgerMenu size={30} color="#303030" />
        </figure>
        {showCart && <Order />}
      </nav>
    </header>
  )
}
