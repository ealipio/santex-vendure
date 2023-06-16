import { gql } from '@apollo/client';

export const ADD_ITEM_TO_ORDER = gql`
  mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
      ... on Order {
        id
        code
        state
        subTotal
        subTotalWithTax
      }
      ... on OrderLimitError {
        errorCode
        message
        maxItems
      }
    }
  }
`;
