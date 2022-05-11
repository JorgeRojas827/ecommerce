import { useAppDispatch, useAppSelector } from '../redux/hooks'
import {
  addProduct,
  deleteProduct,
  removeOneProduct,
} from '../redux/slices/cartSlice'
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

  const removeOneProductFromCart = (product: ICartProduct) => {
    dispatch(removeOneProduct(product))
  }

  const changeCantity = (operation: string, product: ICartProduct) => {
    if (product.cantity >= 2 && product.cantity <= 11) {
      operation === 'add'
        ? addProductToCart({ ...product, cantity: 1 })
        : removeOneProductFromCart({ ...product, cantity: 1 })
    } else if (product.cantity == 1) {
      operation === 'add'
        ? addProductToCart({ ...product, cantity: 1 })
        : removeProductFromCart(product)
    } else if (product.cantity == 12) {
      operation !== 'add' &&
        removeOneProductFromCart({ ...product, cantity: 1 })
    }
  }

  return {
    addProductToCart,
    removeProductFromCart,
    removeOneProductFromCart,
    changeCantity,
    detailCart,
    shoppingCartProducts,
  }
}
