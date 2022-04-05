import React from 'react'

export const Objetive = () => {
  return (
    <div className="grid grid-flow-col-dense bg-bkg md:grid-cols-3">
      <figure className="col-span-1 hidden md:block">
        <img src="/assets/objetive.png" alt="" />
      </figure>
      <div className="col-span-2 mx-auto flex max-w-xl flex-col justify-center py-14 text-center md:pr-8 md:text-right lg:pr-0">
        <h6
          style={{
            WebkitTextStroke: 1,
            WebkitTextStrokeColor: '#C4C4C4',
          }}
          className="font-morganite text-9xl leading-none text-bkg lg:text-titleSection"
        >
          objetive
        </h6>
        <p className="text-xl font-bold text-letter lg:text-4xl">
          We seek to get you to show your incredible style, using our incredible{' '}
          brand
        </p>
      </div>
    </div>
  )
}
