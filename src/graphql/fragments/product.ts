import { gql } from '@apollo/client';

export const ASSETS_FRAGMENT = gql`
  fragment AssetFields on Asset {
    id
    source
    preview
  }
`;

export const PRODUCT_ITEM_FRAGMENT = gql`
  ${ASSETS_FRAGMENT}
  fragment ItemFields on Product {
    id
    name
    description
    variantList {
      totalItems
      items {
        id
        priceWithTax
        name
        currencyCode
      }
    }
    assets {
      ...AssetFields
    }
  }
`;
