import React, { useEffect } from 'react'
import ProductComponent from './ProductComponent'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setProducts } from './../redux/actions/productActions'

function ProductListing() {
  const products = useSelector((state) => state)
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

  console.log(products)

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
