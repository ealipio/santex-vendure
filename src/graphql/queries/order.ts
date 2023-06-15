import { gql } from '@apollo/client';

import { ORDER_FRAGMENT } from '../fragments/order';

export const GET_ACTIVE_ORDER = gql`
  ${ORDER_FRAGMENT}
  query getActiveOrder {
    activeOrder {
      ...ActiveOrder
    }
  }
`;
