import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BillingAddress from '../ui/BillingAddress'
import CartSummary from '../ui/CartSummary'
import OrderPlace from '../ui/OrderPlace'
import PaymentMethod from '../ui/PaymentMethod'
import ShippingMethod from '../ui/ShippingMethod'

const Checkout = () => {
  return (
    
    <Row>
        <Col lg="9" md="9">
            <h3>Checkout</h3>
            <BillingAddress />
            <ShippingMethod />
            <PaymentMethod />
            <OrderPlace />
        </Col>
        <Col lg="3" md="3">
            <CartSummary />
        </Col>
    </Row>
        
    
  )
}

export default Checkout