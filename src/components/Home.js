import React from 'react'
import { Team } from './Team'
import { Faq } from './Item'
import { Feature } from './Features'
import { Header } from './Header'

const Home = () => {
  return (
    <>
        <Header />
        <Feature />
        <Faq />
        {/* <Team /> */}
    </>
  )
}

export default Home