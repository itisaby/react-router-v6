import React from 'react'
import products from "../data"
import {Link}  from 'react-router-dom'

function Products() {

  return (
    <div>
        <h2>Products</h2>
        {products.map((product)=>{
            return(
                <article key={product.id}>
                    <h3>{product.name}</h3>
                    <Link to={`/product/${product.id}`}>More Info</Link>
                </article>
            )
        })}
    </div>
  )
}

export default Products