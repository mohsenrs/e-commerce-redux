import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import ProductComponent from './ProductComponent'
import { setProducts } from './../redux/actions/productActions'

function ProductListing() {
  const dispatch = useDispatch()

  const getProducts = async () => {
    const res = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => console.log('error', err))
    dispatch(setProducts(res.data))
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gridGap: '30px',
      }}
    >
      <ProductComponent />
    </div>
  )
}

export default ProductListing
