import React from 'react'
import client from '../apollo-client'
import { ApolloProvider } from '@apollo/client'
import { ShopSection } from '../components/Sections/Shop'

const Shop = () => {
  return (
    <ApolloProvider client={client}>
      <ShopSection />
    </ApolloProvider>
  )
}

export default Shop
