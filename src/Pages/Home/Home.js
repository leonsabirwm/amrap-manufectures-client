import React from 'react'
import { Banner } from './components/Banner'
import { BusinessSum } from './components/BusinessSum/BusinessSum'
import { Footer } from './components/Footer'
import { Parts } from './components/Parts/Parts'
import { Reviews } from './components/Reviews/Reviews'

export const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <BusinessSum></BusinessSum>
        <Parts></Parts>
        <Reviews></Reviews>
        <Footer></Footer>
    </div>
  )
}
