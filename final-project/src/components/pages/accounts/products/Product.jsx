import React, { Fragment } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <Fragment>
            <h2 className='mb-4'>Product <Link to="/accounts/add-product" className='btn btn-primary' style={{
                float: 'right',
            }}>Add Product</Link></h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>
                            <Link to="/accounts/edit-role/1" className='btn btn-outline-primary mx-2'>
                                Edit
                            </Link>
                            <button className='btn btn-outline-danger'>
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Fragment>
    )
}

export default Product