import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import ProductList from '../utils/ProductList'

const ProductPage = (props) => {
  let prod = props.match.params.id;

  if (isNaN(prod)) {
    return(<Redirect to="/"></Redirect>) 
  }
  const item = ProductList.find(p => p.sku === parseInt(prod));

  return (
    <>
      <h1>{item.name}</h1>
      <img src={item.image} alt={item.name}/>
      <div className="price"><small>CAD</small> {item.price}</div>
      <Link to='/' className='button' >BUY NOW</Link>
      <br/><br/><br/>
      <Link to='/products' >Back</Link>
    </>
  )
}
export default ProductPage;
