import React from 'react'
import { marqueeEffectLeft } from '../../helpers/animations'
import { motion } from 'framer-motion'
import { Tag } from '../UI/Tag'
import { Card } from '../UI/Card'
import { Button } from '../UI/Button'
import Link from 'next/link'
import { useProducts } from '../../hooks/useProducts'
import { useCategories } from '../../hooks/useCategories'
import { useState, useEffect } from 'react'
import { IProducts } from '../../interfaces/IFeaturedProducts'
import { useRouter } from 'next/router'

export const ShopSection = () => {
  const { getProductsByCategory, getProductsByPrice, getShopProducts } =
    useProducts()
  const [shop, setShop] = useState<IProducts>()
  const [selectedTag, setTag] = useState<string>()
  const { categories } = useCategories()
  const router = useRouter()
  const { filter } = router.query

  useEffect(() => {
    filter ? toggleCategories(filter.toString()) : getShopProducts(setShop)
  }, [])

  const toggleCategories = async (id: string) => {
    const { data } = await getProductsByCategory(Number(id))
    setShop(data)
    setTag(id)
  }
  const togglePrice = async (from: number, to: number) => {
    const { data } = await getProductsByPrice(from, to)
    setShop(data)
  }

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
                  return (
                    <Tag
                      clickEvent={() => toggleCategories(id)}
                      border={false}
                      clicked={selectedTag == id ? true : false}
                      name={name}
                      key={id}
                    />
                  )
                }
              )}
              <Tag
                clickEvent={() => {
                  getShopProducts(setShop)
                  setTag('')
                }}
                border={false}
                name="Clear filters"
              />
            </div>
          </div>
          <div
            id="price"
            className="space-y-5 border-primary border-opacity-20 py-3 lg:border-b lg:py-8"
          >
            <h6 className="text-2xl font-semibold">Price</h6>
            <div className="flex justify-around lg:w-1/2 lg:flex-col lg:space-y-6">
              <Tag
                name="$0 - $50"
                clickEvent={() => {
                  togglePrice(0, 50)
                  setTag('50')
                }}
                clicked={selectedTag == '50' ? true : false}
              />
              <Tag
                name="$50 - $100"
                clickEvent={() => {
                  togglePrice(50, 100)
                  setTag('100')
                }}
                clicked={selectedTag == '100' ? true : false}
              />
              <Tag
                name="$100 - $150"
                clickEvent={() => {
                  togglePrice(100, 150)
                  setTag('150')
                }}
                clicked={selectedTag == '150' ? true : false}
              />
            </div>
          </div>
        </div>
        <div className="col-span-3 grid border-t border-l border-primary border-opacity-20 md:grid-cols-2 lg:grid-cols-3">
          {shop?.products.data.length! > 0 ? (
            shop?.products.data.map(
              ({ id, attributes: { title, image_color, image, price } }) => {
                return (
                  <div
                    key={id}
                    className="border-b border-r border-primary border-opacity-20 py-8"
                  >
                    <Card
                      dark={false}
                      small={true}
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
            )
          ) : (
            <div className="col-span-3 flex items-center justify-center">
              <h1>No se encontraron productos</h1>
            </div>
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
