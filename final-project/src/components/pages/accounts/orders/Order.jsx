import React, { Fragment } from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Order = () => {

    let { orders } = useSelector(state => state.order);

    orders = orders.orders;

    return (
        <Fragment>
            <h2 className='mb-4'>Order</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Subtotal</th>
                        <th>Grandtotal</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.length > 0 && orders.map((order, index) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>$ {order.subTotal}</td>
                                <td>$ {order.grandTotal}</td>
                                <td>
                                    <Link to={`/accounts/order/view/${index}`} className='btn btn-outline-primary mx-2'>
                                        View
                                    </Link>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </Fragment>
    )
}

export default Order