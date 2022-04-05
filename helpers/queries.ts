import { gql } from '@apollo/client';

export const GET_FEATURED_PRODUCTS = gql(`query {
  products(filters:{
    featured: {eq: true}
  }) {
    data {
      id
      attributes {
        title
        price
        image {
          data {
            attributes {
              url
            }
          }
        }
        image_color {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}`)

export const GET_SHOP_PRODUCTS = gql(`query {
  products(filters:{
    featured: {eq: false}
  }){
    data {
      id
      attributes {
        title
        price
        image {
          data {
            attributes {
              url
            }
          }
        }
        image_color {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
 }
}`)

export const GET_PRODUCTS_ID = gql(`
query {
  products {
    data {
      id
    }
  }
}`)

export const GET_CATEGORIES = gql(`query {
  categories{
   data {
     id
     attributes {
       name 
       }
   }
 }
}`)

export const GET_FEATURED_PRODUCT_ID = (id: number) =>( gql(`query {
  product(id: ${id}) {
    data {
      id
      attributes {
        title,
        price,
        price_overpriced,
        description,
        categories {
          data {
            id
            attributes {
              name
            }
          }
        }
        product_colors {
          data {
            attributes {
              url
            }
          }
        }
        image_color {
          data {
            attributes {
              url
            }
          }
        }
        image_gallery {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}`))