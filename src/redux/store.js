import { configureStore } from '@reduxjs/toolkit';
import products from './producstSlice';
import cart from './cartSlice'

export const store = configureStore({
    reducer: {
    products,
    cart
},
})