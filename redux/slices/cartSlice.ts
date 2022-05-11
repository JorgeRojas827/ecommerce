import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store';
import { ICartProduct } from '../../interfaces/ICartProduct';
import { searchProductShoppingCart } from '../../helpers/functions';

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
    addProduct: ({ products, details }, { payload }: PayloadAction<ICartProduct>) => {
      let currentProduct = searchProductShoppingCart(products, payload);
      if (currentProduct) {
        currentProduct.cantity += payload.cantity;
      } else {
        products.push(payload);
      }
      details.count = products.length 
      details.subtotal += payload.price * payload.cantity
    },
    deleteProduct: (state, { payload }: PayloadAction<ICartProduct>) => {
      state.products.splice(current(state).products.indexOf(payload), 1)
      state.details.subtotal -= payload.price * payload.cantity
      state.details.count = state.products.length 
    },
    removeOneProduct: ({ products, details }, { payload }: PayloadAction<ICartProduct>) => {
      let currentProduct = searchProductShoppingCart(products, payload);
      if (currentProduct) {
        currentProduct.cantity -= payload.cantity;
      }
      details.subtotal -= payload.price * payload.cantity
      details.count = products.length 
    }
  },
})

export const { addProduct, deleteProduct, removeOneProduct } = cartSlice.actions

export const selectProducts = (state: RootState) => state.shoppingCart

export default cartSlice.reducer