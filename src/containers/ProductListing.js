import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import ProductComponent from './ProductComponent'
import { setProducts } from './../redux/actions/productActions'
import classes from './ProductListing.module.scss'

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
    <div className={classes.product_listing}>
      <ProductComponent />
    </div>
  )
}

export default ProductListing
