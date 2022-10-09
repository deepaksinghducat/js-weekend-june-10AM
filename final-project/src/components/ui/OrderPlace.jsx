import React from 'react'
import { Button, Table } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { useDispatch, useSelector } from 'react-redux';
import { addOrderStart } from '../../redux/actions/OrderAction';

const OrderPlace = () => {

  const cart = useSelector(state => state.cart);

  const dispatch = useDispatch();

  const PlaceOrderHandler = (e) => {
    e.preventDefault();

    dispatch(addOrderStart(cart))

  }

  return (
    <Accordion defaultActiveKey="0" className='mt-4'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Order Summary</Accordion.Header>
        <Accordion.Body>
          <Table>
            <thead>
              <tr>
                <th>Item</th>
              </tr>
            </thead>
            <tbody>
            {
                cart.cartItems && cart.cartItems.length > 0 && cart.cartItems.map((cartItem, index) => (
                  <tr key={index}>
                    <td className='d-flex' >
                    <div>
                      <img src={cartItem.image_url} alt={cartItem.name} />
                    </div>
                    <div className='mx-4'>
                      <p>{cartItem.name}</p>
                      <p>Price: ${cartItem.price}</p>
                      <p>Qty : {cartItem.quantity}</p>
                    </div>
                  </td>
                  </tr>
                  
                ))
              }
            </tbody>
          </Table>

          <Button type="button" onClick={PlaceOrderHandler}>Place Order</Button>

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default OrderPlace