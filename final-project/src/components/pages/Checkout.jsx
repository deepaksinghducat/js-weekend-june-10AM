import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import BillingAddress from '../ui/BillingAddress'
import CartSummary from '../ui/CartSummary'
import OrderPlace from '../ui/OrderPlace'

const Checkout = () => {
  const cart = useSelector(state => state.cart);

  return (    
    <Row>
        <Col lg="9" md="9">
            <h3>Checkout</h3>
            <BillingAddress />
            {
              cart.address &&  <OrderPlace />
            }
        </Col>
        <Col lg="3" md="3">
            <CartSummary />
        </Col>
    </Row>
        
    
  )
}

export default Checkout