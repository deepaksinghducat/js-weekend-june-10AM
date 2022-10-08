import React from 'react'
import { Button, Table } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { useSelector } from 'react-redux';

const OrderPlace = () => {

  const cart = useSelector(state => state.cart);

  return (
    <Accordion defaultActiveKey="0" className='mt-4'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Billing Address</Accordion.Header>
        <Accordion.Body>
          <Table>
            <thead>
              <tr>
                <th>Item</th>
              </tr>
              {
                cart.cartItems && cart.cartItems.length > 0 && cart.cartItems.map((cartItem, index) => (
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
                ))
              }
            </thead>
            <tbody>
            </tbody>
          </Table>

          <Button type="button">Place Order</Button>

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default OrderPlace