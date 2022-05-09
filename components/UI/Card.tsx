import Link from 'next/link'
import React, { useState } from 'react'
import { ProductAttributes } from '../../interfaces/IFeaturedProducts'
import { Button } from './Button'
import { useShoppingCart } from '../../hooks/useShoppingCart'

interface IProps extends ProductAttributes {
  id: string
  dark?: boolean
  small?: boolean
  imageDark?: boolean
  addCart?: boolean
}

export const Card = ({
  image,
  id,
  small = false,
  image_color,
  title,
  imageDark,
  price,
  dark = true,
  addCart = true,
}: IProps) => {
  const [hovered, setHovered] = useState(false)
  const toggleHovered = () => {
    setHovered(!hovered)
  }

  return (
    <div className="text-start mt-5 flex flex-col px-8 font-montserrat md:px-14">
      <div className="flex items-center justify-center ">
        <div
          className="relative flex items-center justify-center"
          onMouseEnter={toggleHovered}
          onMouseLeave={toggleHovered}
        >
          <div
            style={{
              display: hovered ? 'none' : 'block',
            }}
          >
            <Link href={`/items/${id}`}>
              <figure>
                <img
                  src={`http://localhost:1337${
                    imageDark
                      ? image.data.attributes.url
                      : image_color.data.attributes.url
                  }`}
                />
              </figure>
            </Link>
          </div>
          <div
            style={{
              display: hovered ? 'block' : 'none',
            }}
            className="flex cursor-pointer items-center justify-center"
          >
            <figure>
              <img
                src={`http://localhost:1337${image_color.data.attributes.url}`}
              />
            </figure>
            <div className="absolute top-0 flex h-full w-full items-center justify-center">
              <div className="absolute h-full w-full bg-black opacity-60"></div>
              <Link href={`/item/${id}`}>
                <div>
                  <Button
                    dark
                    title="details"
                    extraClass="sm:scale-90 px-10 scale-50 md:scale-50"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center space-y-1 pl-5">
        <h6
          className={`mt-5 max-w-xs cursor-pointer text-left text-xl font-semibold  ${
            small ? 'md:text-xl' : 'md:text-2xl'
          } ${dark ? 'text-letter' : 'text-primary'}`}
        >
          {title}
        </h6>
        <p
          className={`mb-5 max-w-xs text-left  ${
            dark ? 'text-letter' : 'text-primary'
          }`}
        >
          ${price}.00
        </p>
      </div>
    </div>
  )
}
