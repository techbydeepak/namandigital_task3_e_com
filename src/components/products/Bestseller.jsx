import React from 'react'
import Products from './Products'
import { bestsellers } from '../../data'

function Bestseller() {
  return <Products items={bestsellers} heading="Bestsellrs"/>
}

export default Bestseller
