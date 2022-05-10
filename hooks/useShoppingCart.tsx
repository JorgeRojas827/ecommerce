import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { addProduct } from '../redux/slices/cartSlice'
import { ICartProduct } from '../interfaces/ICartProduct'

export const useShoppingCart = () => {
  const dispatch = useAppDispatch()
  const { details: detailCart } = useAppSelector((state) => state.shoppingCart)
  const { products: shoppingCartProducts } = useAppSelector(
    (state) => state.shoppingCart
  )

  const addProductToCart = (product: ICartProduct) => {
    dispatch(addProduct(product))
  }

  return {
    addProductToCart,
    detailCart,
    shoppingCartProducts,
  }
}
