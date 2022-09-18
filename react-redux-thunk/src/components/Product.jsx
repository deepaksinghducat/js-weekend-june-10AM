import React from 'react'
import { useDispatch } from 'react-redux'
import { ADD_CART } from '../redux/constants/CartContants';

const Product = ({ data }) => {

    const dispatch = useDispatch();

    return (
        <div className="card">
            <img src={data.image} className="card-img-top" alt={data.title} />
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <p className="card-text">Price : ${data.price}</p>
                <button
                    type='button'
                    className="btn btn-primary"
                    onClick={() => dispatch({ type: ADD_CART, payload: data })}
                >Add to Cart</button>
            </div>
        </div>
    )
}

export default Product