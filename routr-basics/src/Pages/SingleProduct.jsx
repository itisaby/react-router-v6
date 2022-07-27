import React from 'react'
import { Link, useParams } from 'react-router-dom'
import products from "../data";
function SingleProduct() {
    const productId = useParams().productId
    const product = products.find(product => product.id === productId);
    const {image, name} = product;
  return (
    <div><h1>SingleProduct</h1>
        <img src={image} alt={name}/>
        <h2>{productId}</h2>
        <h2>{name}</h2>
        <Link to="/product">Products</Link>
    </div>
  )
}

export default SingleProduct