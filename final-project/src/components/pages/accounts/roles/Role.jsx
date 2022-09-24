import React, { Fragment } from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeRoleStart } from '../../../../redux/actions/RoleAction';

const Role = () => {

    const { roles } = useSelector(state => state.roles)


    const dispatch = useDispatch();


    const removeRoleHandler =(index) => {
        dispatch(removeRoleStart(index))
    }

    return (
        <Fragment>
            <h2 className='mb-4'>Role <Link to="/accounts/add-role" className='btn btn-primary' style={{
                float: 'right',
            }}>Add Role</Link></h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        roles.length > 0 && roles.map((role, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{role.name}</td>
                                <td>
                                    <Link to={`/accounts/edit-role/${index}`} className='btn btn-outline-primary mx-2'>
                                        Edit
                                    </Link>
                                    <button className='btn btn-outline-danger' onClick={() => removeRoleHandler(index)}>
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

export default Role