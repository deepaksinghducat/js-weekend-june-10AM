import axios from 'axios'
import { ERR_PRODUCTS, GET_PRODUCTS } from '../constants/ProductContants';

export const getProducts = () => async(dispatch) => {
	try{
		const { data } = await axios('https://fakestoreapi.com/products') 

		dispatch({type: GET_PRODUCTS, payload: data});

	}catch{
		dispatch({type: ERR_PRODUCTS, payload: 'Something went wrong'})
	}
}