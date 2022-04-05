import React from 'react'

interface IProps {
  size: string
}

export const Size = ({ size }: IProps) => {
  return (
    <div className="grid w-12 place-content-center rounded-3xl border border-primary py-2 font-montserrat font-semibold">
      <p>{size}</p>
    </div>
  )
}
