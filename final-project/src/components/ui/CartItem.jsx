import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { incrementCartStart, inputCartStart, removeCartStart } from '../../redux/actions/CartAction';

const CartItem = ({item}) => {

    const [quantity,setQuantity] = useState(item.quantity)

    const dispatch = useDispatch();

    const removeCartHandler = () => {
        dispatch(removeCartStart(item))
    }

    const IncrementHandler = () => {
        const product = item;
        let updatedQuantity = parseInt(quantity) + 1;
        
        setQuantity(updatedQuantity);

        dispatch(incrementCartStart(product, updatedQuantity))
    }

    const DecrementHandler = () => {
        const product = item;
        let updatedQuantity = parseInt(quantity) - 1;
        
        setQuantity(updatedQuantity);

        dispatch(incrementCartStart(product, updatedQuantity))
    }

    const InputQuantityHandler = (value) => {

        const product = item;
        let updatedQuantity = value;
        
        setQuantity(updatedQuantity);

        dispatch(inputCartStart(product, updatedQuantity))
    }

    return (
        <tr>
            <td className='d-flex'>
                <div>
                    <img src={item.image_url} alt={item.name} />
                </div>
                <div className='mx-4'>
                    <p>{item.name}</p>
                    <p>Price: ${item.price}</p>
                    <p>Qty : {item.quantity}</p>
                </div>
            </td>
            <td>
                <button className='btn btn-primary' onClick={DecrementHandler}>-</button>
                <input type='number' value={quantity} onChange={(e) => InputQuantityHandler(e.target.value)} style={{
                    height: " 37px",
                    marginTop: "7px",
                    width: " 10%",
                    textAlign: "center",
                }} />
                <button className='btn btn-primary' onClick={IncrementHandler}>+</button>
            </td>
            <td><Button type="button" className="btn-danger" onClick={() => removeCartHandler()}>Remove</Button></td>
        </tr>
    )
}

export default CartItem