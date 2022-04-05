import React from 'react'
import Link from 'next/link'
import {
  FaTwitter,
  FaFacebook,
  FaPinterest,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className="mx-auto flex max-w-7xl flex-col text-primary">
      <div className="flex flex-col items-center justify-center space-y-10 py-14 md:grid md:grid-cols-4 md:place-content-center md:py-20">
        <div className="flex items-center justify-center space-x-5">
          <figure>
            <Link href="/">
              <img className="w-20" src="/assets/logo.png" alt="" />
            </Link>
          </figure>
          <h1 className="font-morganite text-6xl">Permit</h1>
        </div>
        <div className="mx-auto flex flex-col space-y-2 text-center font-medium md:items-start lg:items-start">
          <h1 className="text-lg font-bold uppercase">Categories</h1>
          <p className="cursor-pointer">Tops</p>
          <p className="cursor-pointer">Jackets</p>
          <p className="cursor-pointer">Shirts</p>
          <p className="cursor-pointer">Coats</p>
          <p className="cursor-pointer">New Arrival</p>
        </div>
        <div className="mx-auto flex flex-col space-y-2 text-center  font-medium md:items-start lg:items-start">
          <h1 className="text-lg font-bold uppercase">About</h1>
          <p className="cursor-pointer">Our story</p>
          <p className="cursor-pointer">Community</p>
          <p className="cursor-pointer">Blog</p>
        </div>
        <div className="mx-auto flex flex-col space-y-2 text-center font-medium md:items-start lg:items-start">
          <h1 className="text-lg font-bold uppercase">Information</h1>
          <p className="cursor-pointer">Terms of service</p>
          <p className="cursor-pointer">Privacy policy</p>
          <p className="cursor-pointer">FAQ</p>
          <p className="cursor-pointer">Help</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between space-y-5 border-t border-primary border-opacity-10 py-8 px-5 lg:flex-row lg:space-y-0">
        <p className="font-medium">Made with ♥ by Jorge Rojas</p>
        <div className="flex space-x-5 text-2xl text-primary ">
          <FaTwitter className="cursor-pointer" />
          <FaFacebook className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <FaPinterest className="cursor-pointer" />
          <FaYoutube className="cursor-pointer" />
        </div>
      </div>
    </div>
  )
}
