import React from 'react'
import { Banner } from './components/Banner'
import { BusinessSum } from './components/BusinessSum/BusinessSum'
import { Footer } from './components/Footer'
import { Parts } from './components/Parts/Parts'
import { Reviews } from './components/Reviews/Reviews'

export const Home = () => {
  return (
    <div>
        <Parts></Parts>
        <BusinessSum></BusinessSum>
        <Reviews></Reviews>
        <Banner></Banner>
        <Footer></Footer>
    </div>
  )
}
