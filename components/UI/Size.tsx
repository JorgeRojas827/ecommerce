import React from 'react'
import { motion } from 'framer-motion'

interface IProps {
  size: string
  clicked?: boolean
  clickEvent?: React.MouseEventHandler<HTMLDivElement>
}

export const Size = ({ size, clicked, clickEvent }: IProps) => {
  return (
    <motion.div
      whileTap={{
        scale: 0.95,
        transition: {
          duration: 0.1,
        },
      }}
      className={`grid w-12 cursor-pointer place-content-center rounded-3xl border border-primary py-2 font-montserrat font-semibold ${
        clicked && 'bg-primary text-white'
      }`}
      onClick={clickEvent}
    >
      <p>{size}</p>
    </motion.div>
  )
}
