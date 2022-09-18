import React, { Fragment } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

const CartSummary = () => {
  return (
    <Fragment>
        <h3>Cart Summary</h3>
        <ListGroup>
          <ListGroup.Item>SubTotal: $100</ListGroup.Item>
          <ListGroup.Item>Taxes: $0</ListGroup.Item>
          <ListGroup.Item>GrandTotal: $100</ListGroup.Item>
        </ListGroup>
    </Fragment>
  )
}

export default CartSummary