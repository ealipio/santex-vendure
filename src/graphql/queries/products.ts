import { gql } from '@apollo/client';
import { PRODUCT_ITEM_FRAGMENT } from '../fragments/product';

export const GET_PRODUCTS = gql`
  ${PRODUCT_ITEM_FRAGMENT}
  query getProducts {
    products {
      totalItems
      items {
        ...ItemFields
      }
    }
  }
`;

export const GET_PRODUCTS_FROM_COLLECTIONS = gql`
  query getProductsFromCollections {
    collections(options: {}) {
      items {
        productVariants(options: {}) {
          items {
            id
            productId
            product {
              description
              assets {
                id
                preview
              }
            }
            name
            sku
            stockLevel
            currencyCode
            priceWithTax
          }
        }
      }
    }
  }
`;
