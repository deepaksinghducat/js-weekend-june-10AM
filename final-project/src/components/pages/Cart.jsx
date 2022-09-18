import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const Cart = () => {
  return (
    <Row className='mt-4'>
      <Col lg="9" md="9">
        <h3>Cart Details</h3>
        <Table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='d-flex'>
                <div>
                  <img src="https://via.placeholder.com/100" />
                </div>
                <div className='mx-4'>
                  <p>Car</p>
                  <p>Price: $100</p>
                  <p>Qty : 2</p>
                </div>
              </td>
              <td>
                <button className='btn btn-primary'>-</button>
                <input type='text' value={2} style={{
                  height: " 37px",
                  marginTop: "7px",
                  width: " 10%",
                  textAlign: "center",
                }} />
                <button className='btn btn-primary'>+</button>
              </td>
              <td><Button type="button" className="btn-danger">Remove</Button></td>
            </tr>
          </tbody>
        </Table>
      </Col>
      <Col lg="3" md="3">
        <h3>Cart Details</h3>
        <ListGroup>
          <ListGroup.Item>SubTotal: $100</ListGroup.Item>
          <ListGroup.Item>Taxes: $0</ListGroup.Item>
          <ListGroup.Item>GrandTotal: $100</ListGroup.Item>
          <ListGroup.Item> 
            <div className="d-grid gap-2">
              <Button variant="primary" size="lg">
                Proceed To Checkout
              </Button>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  )
}

export default Cart