import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/ProductActions';
import Product from './Product'

const Home = () => {

  const dispatch = useDispatch();
  const { products } = useSelector(state => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, [])

  return (
    <div className='row'>
      {
        products.length > 0 && products.map(product => (
          <div className='col-sm-3 my-4' key={product.id}>
            <Product data={product} />
          </div>
        ))
      }
    </div>
  )
}

export default Home