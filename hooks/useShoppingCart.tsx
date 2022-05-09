import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { addProduct } from '../redux/slices/cartSlice'
import { ICartProduct } from '../interfaces/ICartProduct'

export const useShoppingCart = () => {
  const dispatch = useAppDispatch()
  const { count: totalProducts } = useAppSelector((state) => state.shoppingCart)

  const addProductToCart = (product: ICartProduct) => {
    dispatch(addProduct(product))
  }

  return {
    addProductToCart,
    totalProducts,
  }
}
