import React from 'react'
import { useState } from 'react'
import { BsChevronUp, BsChevronDown } from 'react-icons/bs'

export const Cantity = () => {
  const [cantity, setCantity] = useState(0)

  return (
    <div className="relative">
      <input
        id="qty"
        value={cantity}
        onChange={(e) => setCantity(Number(e.target.value))}
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
