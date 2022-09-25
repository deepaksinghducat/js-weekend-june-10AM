import React, { Fragment } from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const User = () => {

    const { user } = useSelector(state => state.user);

    return (
        <Fragment>
            <h2 className='mb-4'>User <Link to="/accounts/add-user" className='btn btn-primary' style={{
                float: 'right',
            }}>Add User</Link></h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.length > 0 && user.map((usr, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{usr.name}</td>
                                <td>{usr.email}</td>
                                <td>{usr.role}</td>
                                <td>{usr.status == '1' ? 'Active' : 'Inactive'}</td>
                                <td>
                                    <Link to={`/accounts/edit-user/${index}`} className='btn btn-outline-primary mx-2'>
                                        Edit
                                    </Link>
                                    <button className='btn btn-outline-danger'>
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

export default User