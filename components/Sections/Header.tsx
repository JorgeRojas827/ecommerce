import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'

export const Header = () => {
  return (
    <header className="mx-auto max-w-7xl">
      <nav className="flex items-center justify-between py-5 px-10 font-montserrat font-semibold uppercase">
        <ul className="hidden space-x-32 md:flex xl:space-x-48">
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
        <ul className="hidden space-x-32 md:flex xl:space-x-48">
          <Link href="/objetive">
            <li className="cursor-pointer">Objetive</li>
          </Link>
          <li className="cursor-pointer">Cart (0)</li>
        </ul>
        <figure className="block md:hidden">
          <GiHamburgerMenu size={30} color="#303030" />
        </figure>
      </nav>
    </header>
  )
}
