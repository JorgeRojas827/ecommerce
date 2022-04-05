import { NextPage } from 'next'
import React from 'react'
import { FeaturedSection } from '../components/Sections/Featured'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client'

const Featured: NextPage = () => {
  return (
    <ApolloProvider client={client}>
      <FeaturedSection />
    </ApolloProvider>
  )
}

export default Featured
