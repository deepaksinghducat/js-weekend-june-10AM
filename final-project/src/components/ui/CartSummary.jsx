import React, { Fragment } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';

const CartSummary = () => {

  const cart = useSelector(state => state.cart);

  return (
    <Fragment>
        <h3>Cart Summary</h3>
        <ListGroup>
          <ListGroup.Item>SubTotal: ${cart.subTotal}</ListGroup.Item>
          <ListGroup.Item>Taxes: ${cart.taxes}</ListGroup.Item>
          <ListGroup.Item>GrandTotal: ${cart.grandTotal}</ListGroup.Item>
        </ListGroup>
    </Fragment>
  )
}

export default CartSummary