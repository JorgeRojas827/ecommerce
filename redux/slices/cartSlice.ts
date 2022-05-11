import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store';
import { ICartProduct } from '../../interfaces/ICartProduct';

interface ICartProductSlice {
  products: ICartProduct[],
  details: {
    count: number,
    subtotal: number
  }
}

const initialState: ICartProductSlice = {products: [], details: {count: 0, subtotal: 0}}

export const cartSlice = createSlice({
  name: 'shopping_cart',
  initialState,
  reducers: {
    addProduct: (state, { payload }: PayloadAction<ICartProduct>) => {
      let currentProduct = state.products.find(e => e.name == payload.name && e.size == payload.size && e.color == payload.color);
      if (currentProduct) {
        currentProduct.cantity += payload.cantity;
      } else {
        state.products.push(payload);
      }
      state.details.count = state.products.length 
      state.details.subtotal += payload.price * payload.cantity
    },
    deleteProduct: (state, { payload }: PayloadAction<ICartProduct>) => {
      
      state.products.splice(current(state).products.indexOf(payload), 1)
      state.details.count = state.products.length 
    }
  },
})

export const { addProduct, deleteProduct } = cartSlice.actions

export const selectProducts = (state: RootState) => state.shoppingCart

export default cartSlice.reducer