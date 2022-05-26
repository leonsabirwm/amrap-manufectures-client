import React from 'react'
import { Carosuel } from './Carosuel'
import { Banner } from './components/Banner'
import { BusinessSum } from './components/BusinessSum/BusinessSum'
import { Footer } from './components/Footer'
import { Parts } from './components/Parts/Parts'
import { Reviews } from './components/Reviews/Reviews'
import { DlearshipStore } from './DlearshipStore'

export const Home = () => {
  return (
    <div>
        <Carosuel></Carosuel>
        <BusinessSum></BusinessSum>
        <Parts></Parts>
        <Banner></Banner>
        <Reviews></Reviews>
        <DlearshipStore></DlearshipStore>
        <Footer></Footer>
    </div>
  )
}
