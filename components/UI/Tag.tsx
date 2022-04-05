import React from 'react'

interface IProps {
  name: string
  border?: boolean
}

export const Tag = ({ name, border = true }: IProps) => {
  return (
    <div
      style={{ border: border ? 'all' : 'none' }}
      className="grid cursor-pointer place-content-center rounded-3xl border border-primary py-1 px-2"
    >
      <h6>{name}</h6>
    </div>
  )
}
