import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../ui/Product'

const Home = () => {
  return (
    <Row className='mb-4'>
        <Col  lg="3" className='mt-4'>
            <Product />
        </Col>
        <Col  lg="3" className='mt-4'>
            <Product />
        </Col>
        <Col  lg="3" className='mt-4'>
            <Product />
        </Col>
        <Col  lg="3" className='mt-4'>
            <Product />
        </Col>
        <Col  lg="3" className='mt-4'>
            <Product />
        </Col>
        <Col  lg="3" className='mt-4'>
            <Product />
        </Col>
        <Col  lg="3" className='mt-4'>
            <Product />
        </Col>
    </Row>
    
  )
}

export default Home