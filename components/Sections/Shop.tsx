import React from 'react'
import { marqueeEffectLeft } from '../../helpers/animations'
import { motion } from 'framer-motion'
import { useQuery } from '@apollo/client'
import { GET_CATEGORIES, GET_SHOP_PRODUCTS } from '../../helpers/queries'
import { ICategories } from '../../interfaces/ICategories'
import { Tag } from '../UI/Tag'
import { IFeaturedProducts } from '../../interfaces/IFeaturedProducts'
import { Card } from '../UI/Card'
import { Button } from '../UI/Button'
import Link from 'next/link'

export const ShopSection = () => {
  const { data: categories } = useQuery<ICategories>(GET_CATEGORIES)
  const { data: products } = useQuery<IFeaturedProducts>(GET_SHOP_PRODUCTS)

  return (
    <div className="overflow-hidden">
      <motion.h1
        style={{
          WebkitTextStroke: 1,
          WebkitTextStrokeColor: '#303030',
        }}
        variants={marqueeEffectLeft}
        animate="animate"
        className="whitespace-nowrap py-5 font-morganite text-9xl font-black text-white md:text-9xl"
      >
        our products our products our products our products our products our
        products our products our products our products
      </motion.h1>
      <div className="mx-auto grid grid-cols-1 place-content-center border-primary border-opacity-20 px-5 lg:grid-cols-4 ">
        <div
          id="filters"
          className="col-span-1 flex flex-col space-y-5 border-t border-primary border-opacity-20 py-5 lg:flex-col lg:space-y-5 lg:border-y lg:px-8"
        >
          <div
            id="categories"
            className="space-y-5 border-primary border-opacity-20 py-3 lg:border-y lg:py-8"
          >
            <h6 className="text-2xl font-semibold">Categories</h6>
            <div className="flex flex-wrap justify-around lg:flex-col lg:items-start lg:justify-start lg:space-y-3">
              {categories?.categories.data.map(
                ({ attributes: { name }, id }) => {
                  return <Tag border={false} name={name} key={id} />
                }
              )}
            </div>
          </div>
          <div
            id="price"
            className="space-y-5 border-primary border-opacity-20 py-3 lg:border-b lg:py-8"
          >
            <h6 className="text-2xl font-semibold">Price</h6>
            <div className="flex justify-around lg:w-1/2 lg:flex-col lg:space-y-6">
              <Tag name="$50 - $100" />
              <Tag name="$100 - $150" />
              <Tag name="$150 - $200" />
            </div>
          </div>
        </div>
        <div className="col-span-3 grid border-t border-l border-primary border-opacity-20 md:grid-cols-2 lg:grid-cols-3">
          {products?.products.data.map(
            ({ id, attributes: { title, image_color, image, price } }) => {
              return (
                <div className="border-b border-r border-primary border-opacity-20 py-8">
                  <Card
                    dark={false}
                    small={true}
                    key={id}
                    id={id}
                    title={title}
                    image={image}
                    image_color={image_color}
                    price={price}
                    addCart={false}
                  />
                </div>
              )
            }
          )}
        </div>
      </div>
      <Link href="/shop">
        <div>
          <Button extraClass="mx-auto my-7" title="view all" />
        </div>
      </Link>
    </div>
  )
}
