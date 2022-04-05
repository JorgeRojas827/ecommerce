import React, { ReactElement } from 'react'
import { Header } from '../Sections/Header'
import { Footer } from '../Sections/Footer'

interface IProps {
  children: ReactElement
}

export const Layout = ({ children }: IProps) => {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  )
}
