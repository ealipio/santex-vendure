import { gql } from '@apollo/client';
import { PRODUCT_ITEM_FRAGMENT, SEARCH_FRAGMENT } from '../fragments/product';

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

export const SEARCH_QUERY = gql`
  ${SEARCH_FRAGMENT}
  query Search($groupByProduct: Boolean!) {
    search(input: { groupByProduct: $groupByProduct }) {
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
