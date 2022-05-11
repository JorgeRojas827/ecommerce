import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import React from 'react'
import client from '../../apollo-client'
import { IProducts } from '../../interfaces/IFeaturedProducts'
import { GET_FEATURED_PRODUCT_ID } from '../../helpers/queries'
import { ParsedUrlQuery } from 'querystring'
import { Tag } from '../../components/UI/Tag'
import { IProduct } from '../../interfaces/IFeaturedProduct'
import { sizes } from '../../helpers/lists'
import { Size } from '../../components/UI/Size'
import { Cantity } from '../../components/UI/Cantity'
import { Button } from '../../components/UI/Button'
import { GET_PRODUCTS_ID } from '../../helpers/queries'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useShoppingCart } from '../../hooks/useShoppingCart'
import { ICartProduct } from '../../interfaces/ICartProduct'
import { removeLastLetter } from '../../helpers/functions'

interface IProps {
  data: IProduct
}

const Product = ({
  data: {
    product: {
      data: { attributes },
    },
  },
}: IProps) => {
  const [image, setImage] = useState<string>(
    `http://localhost:1337${attributes.image_color.data.attributes.url}`
  )
  const { addProductToCart } = useShoppingCart()
  const { push } = useRouter()
  const [product, setProduct] = useState<ICartProduct>({
    size: 'S',
    color: attributes.colors.data[0].attributes.name,
    cantity: 1,
    image: attributes.image_color.data.attributes.url,
    name: attributes.title,
    price: attributes.price,
    category: removeLastLetter(attributes.categories.data[0].attributes.name),
  })

  return (
    <div className="mx-auto flex flex-col justify-center border-primary lg:grid lg:flex-none lg:grid-cols-3 lg:place-content-center lg:border-y">
      <div
        className="mx-5 flex items-center justify-between border-y border-primary px-2 py-3 font-montserrat lg:hidden"
        id="tags"
      >
        <h4 className="font-semibold uppercase">Tags</h4>
        {attributes.categories.data.map(({ id, attributes: { name } }) => {
          return <Tag name={name} key={id} />
        })}
      </div>
      <div
        id="image"
        className="mt-5 flex justify-evenly lg:order-2 lg:mt-0 lg:flex-col lg:items-center lg:justify-center lg:space-y-4 lg:border-r lg:border-primary lg:py-10"
      >
        <figure className="flex">
          <img className="w-64 object-cover lg:w-72" src={image} />
        </figure>
        <div id="gallery" className="flex justify-center">
          <figure className="flex flex-col justify-around lg:flex-row lg:space-x-4">
            {attributes.image_gallery.data.map((color) => {
              return (
                <motion.img
                  key={color.attributes.url}
                  className="w-12 cursor-pointer rounded-md opacity-60 lg:w-16"
                  whileHover={{
                    opacity: 1,
                    transition: {
                      duration: 0.02,
                    },
                  }}
                  onClick={() =>
                    setImage(`http://localhost:1337${color.attributes.url}`)
                  }
                  src={`http://localhost:1337${color.attributes.url}`}
                />
              )
            })}
          </figure>
        </div>
      </div>
      <div className="mx-5 flex w-11/12 border-b border-primary pb-7 lg:hidden lg:pb-0"></div>
      <div
        id="content"
        className="mx-5 flex flex-col items-center justify-between space-y-2 border-b border-primary py-5 font-montserrat text-primary lg:mx-0 lg:border-b-0 lg:border-r lg:border-primary lg:px-10 lg:py-10"
      >
        <div className="flex flex-col items-center space-y-2 lg:space-y-5">
          <h2 className="max-w-xs text-center text-xl font-bold lg:max-w-sm lg:text-left lg:text-3xl">
            {attributes.title}
          </h2>
          <div
            className="flex items-end space-x-1 font-montserrat lg:space-x-5 lg:self-start"
            id="price"
          >
            <p className="text-2xl font-semibold lg:text-3xl">
              ${attributes.price}.00
            </p>
            <p className="line-through">${attributes.price_overpriced}.00</p>
          </div>
          <p className="lg:max-w-sm">{attributes.description}</p>
        </div>
        <div
          className="hidden items-center justify-between border-y border-primary px-2 py-3 font-montserrat lg:flex lg:w-80"
          id="tags"
        >
          <h4
            className="font-semibold uppercase lg:text-xl lg:font-bold
          "
          >
            Tags
          </h4>
          {attributes.categories.data.map(({ id, attributes: { name } }) => {
            return (
              <Tag
                name={name}
                key={id}
                clickEvent={() => push(`/shop?filter=${id}`)}
              />
            )
          })}
        </div>
      </div>
      <div
        id="details"
        className="mx-5 border-b border-primary px-3 md:px-28 lg:order-3 lg:mx-0 lg:flex lg:flex-col lg:border-0 lg:px-14"
      >
        <h1 className="mt-10 mb-5 text-xl font-semibold md:text-3xl">
          Custom you clothe:
        </h1>
        <div className="flex justify-between space-y-3 lg:flex-col">
          <div id="size" className="mt-3 flex flex-col space-y-1 lg:space-y-3">
            <h3>Size:</h3>
            <div className="flex space-x-1 lg:space-x-3">
              {sizes.map((size, i) => {
                return (
                  <Size
                    clickEvent={() => setProduct({ ...product, size })}
                    clicked={product.size == size ? true : false}
                    size={size}
                    key={i}
                  />
                )
              })}
            </div>
          </div>
          <div
            id="qty"
            className="flex flex-col items-start space-y-1 lg:space-y-3"
          >
            <h3>Qty:</h3>
            <Cantity
              cantity={product.cantity}
              setCantity={(cantity: number) =>
                setProduct({ ...product, cantity })
              }
            />
          </div>
        </div>
        <div id="colors" className="mt-3 space-y-1 lg:mt-5 lg:space-y-3">
          <h3>Colors:</h3>
          <div className="flex space-x-3">
            {attributes.colors.data.map(({ attributes, id }, i) => {
              return (
                <motion.div
                  whileTap={{
                    scale: 0.95,
                    transition: {
                      duration: 0.1,
                    },
                  }}
                  key={i}
                  onClick={() => {
                    setProduct({ ...product, color: attributes.name })
                  }}
                  className={`grid w-10 cursor-pointer place-content-center rounded-full border ${
                    product.color == attributes.name && 'border-primary'
                  }  p-0.5`}
                >
                  <img
                    className="rounded-full object-cover"
                    src={`http://localhost:1337${attributes.color_image.data.attributes.url}`}
                    alt=""
                  />
                </motion.div>
              )
            })}
          </div>
        </div>
        <div className="mt-3 grid place-content-center pb-8 lg:mt-5">
          <Button
            title="add to cart"
            action={() => addProductToCart(product)}
            extraClass="self-center px-2 sm:px-5 lg:px-7 xl:px-10"
          />
        </div>
      </div>
    </div>
  )
}

export default Product

interface IParams extends ParsedUrlQuery {
  product: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query<IProducts>({
    query: GET_PRODUCTS_ID,
  })

  const paths = data.products.data.map((prod) => ({
    params: {
      product: prod.id.toString(),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { product } = context.params as IParams

  const { data } = await client.query<IProduct>({
    query: GET_FEATURED_PRODUCT_ID(Number(product)),
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data,
    },
    revalidate: 60,
  }
}
