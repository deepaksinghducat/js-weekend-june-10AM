import {combineReducers} from '@reduxjs/toolkit'
import { CartReducer } from './CartReducer'
import { ProductReducer } from './ProductReducer'

const reducers = combineReducers({
	product: ProductReducer,
	cart: CartReducer
})

export default reducers;