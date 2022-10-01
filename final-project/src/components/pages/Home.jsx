import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Product from '../ui/Product'

const Home = () => {

    const { products } = useSelector(state => state.product)

    return (
        <Row className='mb-4'>
            {
                products.length > 0 ? products.map((product, index) => (
                    <Col lg="3" md="4" sm="6" className='mt-4' key={index}>
                        <Product data={product} />
                    </Col>
                )) : (<p> No Product</p>)
            }
        </Row>

    )
}

export default Home