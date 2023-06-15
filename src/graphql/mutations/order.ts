import { gql } from '@apollo/client';
import { ORDER_FRAGMENT } from '../fragments/order';

export const ADD_ITEM_TO_ORDER = gql`
  ${ORDER_FRAGMENT}
  mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
      ...ActiveOrder
    }
  }
`;
