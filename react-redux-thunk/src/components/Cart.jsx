import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { REMOVE_CART } from '../redux/constants/CartContants';

const Cart = () => {

  const { cartItem } = useSelector(state => state.cart);
  
  const dispatch = useDispatch();

  return (
    <ul className="list-group my-4">
      {
        cartItem.length >0 ? cartItem.map((item, index) => (
          <li className="list-group-item" key={index}>
            {item.title}

            <button className="btn btn-primary btn-lg float-right" style={{
              float: 'right',
            }} onClick={() => dispatch({type: REMOVE_CART, payload: index})} >Remove Cart</button>
          </li>
        )): (
          <li className="list-group-item">No Cart</li>
        )
      }
    </ul>
  )
}

export default Cart