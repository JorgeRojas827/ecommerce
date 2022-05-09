import { useQuery } from '@apollo/client'
import { ICategories } from '../interfaces/ICategories'
import { GET_CATEGORIES } from '../helpers/queries'

export const useCategories = () => {
  const { data: categories } = useQuery<ICategories>(GET_CATEGORIES)

  return { categories }
}
