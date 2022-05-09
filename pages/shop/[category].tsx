import React from 'react'
import { ParsedUrlQuery } from 'querystring'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { GET_CATEGORIES, GET_PRODUCTS_BY_CATEGORY } from '../../helpers/queries'
import { ICategories } from '../../interfaces/ICategories'
import { IProduct } from '../../interfaces/IFeaturedProduct'
import { IProducts } from '../../interfaces/IFeaturedProducts'
import client from '../../apollo-client'

export const Category = () => {
  return <div></div>
}

interface IParams extends ParsedUrlQuery {
  id_category: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query<ICategories>({
    query: GET_CATEGORIES,
  })

  const paths = data.categories.data.map((prod) => ({
    params: {
      category: prod.id.toString(),
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
  const { id_category } = context.params as IParams

  const { data } = await client.query<IProduct>({
    query: GET_PRODUCTS_BY_CATEGORY(Number(id_category)),
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
