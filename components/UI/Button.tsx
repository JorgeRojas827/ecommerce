import React from 'react'
import { motion } from 'framer-motion'

interface IProps {
  title: string
  dark?: boolean
  action?: () => void
  extraClass?: string
}

export const Button = ({ title, action, extraClass, dark }: IProps) => {
  return (
    <div
      onClick={action}
      className={`relative grid max-w-xs scale-75 cursor-pointer place-content-center py-3 after:absolute after:-top-2 after:-left-2 after:h-full after:w-full after:border  ${extraClass} ${
        dark
          ? 'bg-letter text-primary after:border-letter'
          : 'bg-primary text-white after:border-primary'
      }`}
    >
      <p className="font-morganite text-5xl font-extrabold uppercase">
        {title}
      </p>
    </div>
  )
}
