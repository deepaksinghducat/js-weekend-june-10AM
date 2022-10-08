import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import CartItem from '../ui/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {

  const cart = useSelector(state => state.cart);

  return (
    <Row className='mt-4'>
      <Col lg="9" md="9">
        <h3>Cart Details</h3>
        <Table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              cart.cartItems && cart.cartItems.length > 0 && cart.cartItems.map((cartItem, index) => (
                <CartItem item={cartItem} key={index} />
              ))
            }

          </tbody>
        </Table>
      </Col>
      <Col lg="3" md="3">
        <h3>Cart Details</h3>
        <ListGroup>
          <ListGroup.Item>SubTotal: ${cart.subTotal}</ListGroup.Item>
          <ListGroup.Item>Taxes: ${cart.taxes}</ListGroup.Item>
          <ListGroup.Item>GrandTotal: ${cart.grandTotal}</ListGroup.Item>
          <ListGroup.Item>
            <div className="d-grid gap-2">
              <Link to="/checkout">
                <Button variant="primary" size="lg">
                  Proceed To Checkout
                </Button>
              </Link>              
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  )
}

export default Cart