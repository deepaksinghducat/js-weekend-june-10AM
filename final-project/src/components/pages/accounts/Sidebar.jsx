import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <ListGroup>
            <ListGroup.Item><Link to='/accounts/profile'>Profile</Link></ListGroup.Item>
            <ListGroup.Item><Link to='/accounts/orders'>Orders</Link></ListGroup.Item>
            <ListGroup.Item><Link to='/accounts/products'>Products</Link></ListGroup.Item>
            <ListGroup.Item><Link to='/accounts/users'>User</Link></ListGroup.Item>
            <ListGroup.Item><Link to='/accounts/roles'>Roles</Link></ListGroup.Item>
        </ListGroup>
    )
}

export default Sidebar