import React, { Fragment } from 'react'
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const View = () => {

    const {id} = useParams();

    let {orders} = useSelector(state => state.order);

    orders = orders.orders;

    let order = orders.find((order,index) => index === parseInt(id));

    return (
        <Fragment>
            <h2>Order  id: #{id}<Link to="/accounts/orders" className='btn btn-primary' style={{
                float: 'right',
            }}>Back</Link></h2>
            
            <div className='mt-4'>
                <h3>Billing Address</h3>
                <p>Name: {order.address.name}</p>
                <p>email: {order.address.email}</p>
                <p>state: {order.address.state}</p>
                <p>country: {order.address.country}</p>
                <p>mobile: {order.address.mobile}</p>
            </div>

            <div className='mt-4'>
            <Table>
            <thead>
              <tr>
                <th>Item</th>
              </tr>
            </thead>
            <tbody>
            {
                order.cartItems && order.cartItems.length > 0 && order.cartItems.map((cartItem, index) => (
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
            </div>
        </Fragment>
    )
}

export default View