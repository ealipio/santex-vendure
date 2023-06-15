import { gql } from '@apollo/client';

export const ORDER_FRAGMENT = gql`
  fragment ActiveOrder on Order {
    id
    code
    state
    totalQuantity
    total
    subTotal
    subTotalWithTax
    totalWithTax
    currencyCode
    lines {
      id
      productVariant {
        id
        name
        currencyCode
      }
      unitPriceWithTax
      quantity
      featuredAsset {
        id
        preview
      }
    }
  }
`;

//totalPrice
