import React, { useLayoutEffect, useRef } from 'react'
import { useState } from 'react'

export const useDimensions = () => {
  const ref = useRef<HTMLElement>()
  const [dimensions, setDimensions] = useState({})
  useLayoutEffect(() => {
    setDimensions(ref.current?.getBoundingClientRect().toJSON())
  }, [ref.current])

  return [ref, dimensions]
}
