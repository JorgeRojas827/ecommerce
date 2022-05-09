import { useQuery } from '@apollo/client'
import client from '../apollo-client'
import {
  GET_SHOP_PRODUCTS,
  GET_FEATURED_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORY,
  GET_PRODUCTS_BY_PRICE,
} from '../helpers/queries'
import { IProducts } from '../interfaces/IFeaturedProducts'

export const useProducts = () => {
  const { data: featuredProducts } = useQuery<IProducts>(GET_FEATURED_PRODUCTS)

  const getShopProducts = async (
    setShopProducts: React.Dispatch<React.SetStateAction<IProducts | undefined>>
  ) => {
    const { data } = await client.query<IProducts>({
      query: GET_SHOP_PRODUCTS,
    })
    setShopProducts(data)
  }

  const getProductsByCategory = async (id: number) => {
    return await client.query<IProducts>({
      query: GET_PRODUCTS_BY_CATEGORY(id),
    })
  }
  const getProductsByPrice = async (from: number, to: number) => {
    const request = await client.query<IProducts>({
      query: GET_PRODUCTS_BY_PRICE(from, to),
    })
    return request
  }

  return {
    featuredProducts,
    getShopProducts,
    getProductsByCategory,
    getProductsByPrice,
  }
}
