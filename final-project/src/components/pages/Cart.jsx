import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartStart } from '../../redux/actions/CartAction';

const Cart = () => {

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeCartHandler = (cartItem) => {
    dispatch(removeCartStart(cartItem))
  }

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
                <tr key={index}>
                  <td className='d-flex'>
                    <div>
                      <img src={cartItem.image_url} alt={cartItem.name} />
                    </div>
                    <div className='mx-4'>
                      <p>{cartItem.name}</p>
                      <p>Price: ${cartItem.price}</p>
                      <p>Qty : {cartItem.quantity}</p>
                    </div>
                  </td>
                  <td>
                    <button className='btn btn-primary'>-</button>
                    <input type='text' value={2} style={{
                      height: " 37px",
                      marginTop: "7px",
                      width: " 10%",
                      textAlign: "center",
                    }} />
                    <button className='btn btn-primary'>+</button>
                  </td>
                  <td><Button type="button" className="btn-danger" onClick={() =>removeCartHandler(cartItem)}>Remove</Button></td>
                </tr>
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
              <Button variant="primary" size="lg">
                Proceed To Checkout
              </Button>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  )
}

export default Cart