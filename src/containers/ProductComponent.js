import React from 'react'
import { useSelector } from 'react-redux'

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products)
  const renderList = products.map((product) => (
    <div className='' style={{ height: '100%' }} key={product.id}>
      <div className='ui link cards'>
        <div className='card'>
          <div className='image'>
            <img
              src={product.image}
              alt={product.title}
              style={{ height: '300px' }}
            />
          </div>
          <div className='content'>
            <div
              className='header'
              style={{
                whiteSpace: 'nowrap',
                width: '100%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {product.title}
            </div>
            <div className='meta price'>$ {product.price}</div>
            <div className='meta'>{product.category}</div>
          </div>
        </div>
      </div>
    </div>
  ))

  return <>{renderList}</>
}

export default ProductComponent
