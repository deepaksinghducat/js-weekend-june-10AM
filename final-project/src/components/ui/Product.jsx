import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addCartStart } from '../../redux/actions/CartAction';

const Product = ({data}) => {

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addCartStart(data));
  }

  return (
    <Card>
      <Card.Img variant="top" src={data.image_url} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          {data.description}
        </Card.Text>
        <Card.Text>
          Price:  ${data.price}
        </Card.Text>
        <Button variant="primary" onClick={addToCartHandler}>Add to Cart</Button>
      </Card.Body>
    </Card>
  )
}

export default Product