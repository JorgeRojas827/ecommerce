import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { addProduct, deleteProduct } from '../redux/slices/cartSlice'
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

  const removeProductFromCart = (product: ICartProduct) => {
    dispatch(deleteProduct(product))
  }

  return {
    addProductToCart,
    removeProductFromCart,
    detailCart,
    shoppingCartProducts,
  }
}
