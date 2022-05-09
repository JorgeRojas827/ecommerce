import React from 'react'
import { useState } from 'react'
import { BsChevronUp, BsChevronDown } from 'react-icons/bs'
import { ICartProduct } from '../../interfaces/ICartProduct'

interface IProps {
  cantity: number
  setCantity: (cantity: number) => void
}

export const Cantity = ({ cantity, setCantity }: IProps) => {
  return (
    <div className="relative">
      <input
        id="qty"
        value={cantity}
        onChange={() => setCantity(cantity)}
        className="w-20 rounded-full border border-primary py-2 pl-4 font-semibold"
        min={1}
        max={12}
        type="number"
      />
      <div id="controls" className="absolute right-3.5 top-2.5 flex flex-col">
        <BsChevronUp
          onClick={() => cantity != 12 && setCantity(cantity + 1)}
          className="cursor-pointer"
          size={12}
        />
        <BsChevronDown
          onClick={() => cantity != 0 && setCantity(cantity - 1)}
          className="cursor-pointer"
          size={12}
        />
      </div>
    </div>
  )
}
