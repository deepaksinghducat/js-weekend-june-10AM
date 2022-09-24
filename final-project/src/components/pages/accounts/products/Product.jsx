import React, { Fragment } from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { removeProductStart } from '../../../../redux/actions/ProductAction';

const Product = () => {

    const { products } = useSelector(state => state.product);

    const dispatch = useDispatch();

    const removeProductHandler = (index) => {
        dispatch(removeProductStart(index));

        toast.success('Product Delete Successfully');
    }
    

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
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.length > 0 && products.map((product, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>$ {product.price}</td>
                                <td>{product.status == '1' ? 'Active': 'Inactive'}</td>
                                <td>
                                    <Link to={`/accounts/edit-product/${index}`} className='btn btn-outline-primary mx-2'>
                                        Edit
                                    </Link>
                                    <button className='btn btn-outline-danger' onClick={() => removeProductHandler(index)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </Fragment>
    )
}

export default Product