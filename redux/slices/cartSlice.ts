import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store';
import { ICartProduct } from '../../interfaces/ICartProduct';

interface ICartProductSlice {
  product: ICartProduct[],
  count: number
}

const initialState: ICartProductSlice = {product: [], count: 0,}

export const cartSlice = createSlice({
  name: 'shopping_cart',
  initialState,
  reducers: {
    addProduct: (state, { payload }: PayloadAction<ICartProduct>) => {
      let currentProduct = state.product.find(e => e.name == payload.name && e.size == payload.size);
      if (currentProduct) {
        currentProduct.cantity += payload.cantity;
      } else {
        state.product.push(payload);
      }
      state.count += payload.cantity
    },
  },
})

export const { addProduct } = cartSlice.actions

export const selectProducts = (state: RootState) => state.shoppingCart

export default cartSlice.reducer