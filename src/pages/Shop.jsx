import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offer from '../components/Offer/Offer'
import Newcollection from '../components/Newcollections/Newcollection'
import Newsletter from '../components/Newsletter/Newsletter'

const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offer/>
        <Newcollection/>
        <Newsletter/>
    </div>
  )
}

export default Shop