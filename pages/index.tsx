import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Sections/Header'
import { motion } from 'framer-motion'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { marqueeEffectRight, marqueeEffectLeft } from '../helpers/animations'
import { FeaturedSection } from '../components/Sections/Featured'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client'
import Document, { DocumentContext } from 'next/document'
import { ShopSection } from '../components/Sections/Shop'
import { Objetive } from '../components/Sections/Objetive'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Urban Fashion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative flex justify-center overflow-hidden md:mt-2">
        <figure className="z-50">
          <img
            src="/assets/hero-image.png"
            className="w-64 md:w-auto md:scale-100"
          />
        </figure>
        <div
          className="absolute top-20 md:top-36 
        "
        >
          <motion.h1
            style={{
              WebkitTextStroke: 1,
              WebkitTextStrokeColor: '#303030',
            }}
            variants={marqueeEffectRight}
            initial="hidden"
            animate="animate"
            className="whitespace-nowrap font-morganite text-9xl uppercase text-white md:text-mainLetter md:leading-10"
          >
            You make the rules You make the rules You make the rules You make
            the rules You make the rules You make the rules
          </motion.h1>
          <motion.h1
            style={{
              WebkitTextStroke: 1,
              WebkitTextStrokeColor: '#303030',
            }}
            variants={marqueeEffectLeft}
            animate="animate"
            className="whitespace-nowrap font-morganite text-9xl uppercase text-white md:mt-20 md:text-mainLetter"
          >
            You make the rules You make the rules You make the rules You make
            the rules You make the rules You make the rules
          </motion.h1>
        </div>
        <motion.div
          whileHover={{
            rotate: '360deg',
            transition: {
              ease: 'easeInOut',
              duration: 1,
            },
          }}
          className="absolute bottom-14 left-10 hidden h-16 w-16 cursor-pointer place-content-center rounded-full bg-primary md:grid"
        >
          <a href="#featured">
            <AiOutlineArrowDown size={30} color="white" />
          </a>
        </motion.div>
      </div>

      <ApolloProvider client={client}>
        <FeaturedSection />
        <ShopSection />
      </ApolloProvider>

      <Objetive />
    </div>
  )
}

export default Home
