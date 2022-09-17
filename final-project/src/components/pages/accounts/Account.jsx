import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Account = () => {
  return (
    <Row>
        <Col lg="3"><Sidebar /></Col>
        <Col lg="9"><Outlet /></Col>
    </Row>
  )
}

export default Account