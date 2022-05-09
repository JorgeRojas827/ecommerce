import React from 'react'
import { motion } from 'framer-motion'

interface IProps {
  name: string
  border?: boolean
  clicked?: boolean
  clickEvent?: React.MouseEventHandler<HTMLDivElement>
}

export const Tag = ({ name, border = true, clickEvent, clicked }: IProps) => {
  return (
    <motion.div
      whileTap={{
        scale: 0.95,
        transition: {
          duration: 0.1,
        },
      }}
      style={{ border: border ? 'all' : 'none' }}
      onClick={clickEvent}
      className={`grid cursor-pointer place-content-center rounded-3xl border border-primary py-1 px-3 ${
        clicked && 'bg-primary text-white'
      }`}
    >
      <h6>{name}</h6>
    </motion.div>
  )
}
