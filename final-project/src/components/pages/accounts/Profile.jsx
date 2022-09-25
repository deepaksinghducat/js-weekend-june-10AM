import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

const loginUser = localStorage.getItem('logined_user') ? JSON.parse(localStorage.getItem('logined_user')) : [];

const Profile = () => {
 
  return (
    <ListGroup>
      <ListGroup.Item>Name: {loginUser.name}</ListGroup.Item>
      <ListGroup.Item>Email: {loginUser.email}</ListGroup.Item>
    </ListGroup>
  )
}

export default Profile