import React from 'react'
import ProductComponent from './ProductComponent'
import { useSelector } from 'react-redux';

function ProductListing() {
  const products = useSelector((state) => state)
  console.log(products)
  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  )
}

export default ProductListing
