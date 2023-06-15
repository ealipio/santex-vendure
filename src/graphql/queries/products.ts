import { gql } from '@apollo/client';
import { ITEM_FRAGMENT, SEARCH_FRAGMENT } from '../fragments/product';

export const GET_PRODUCTS = gql`
  ${ITEM_FRAGMENT}
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
