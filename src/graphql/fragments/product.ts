import { gql } from '@apollo/client';

export const ASSETS_SEARCH_RESULT_FRAGMENT = gql`
  fragment AssetFields on SearchResultAsset {
    id
    preview
  }
`;

export const ASSETS_FRAGMENT = gql`
  fragment AssetFields on Asset {
    id
    source
    preview
  }
`;

export const ITEM_FRAGMENT = gql`
  ${ASSETS_FRAGMENT}
  fragment ItemFields on Product {
    id
    name
    slug
    description
    createdAt
    assets {
      ...AssetFields
    }
  }
`;

export const SEARCH_FRAGMENT = gql`
  ${ASSETS_SEARCH_RESULT_FRAGMENT}
  fragment ItemFields on SearchResult {
    productName
    sku
    description
    productAsset {
      ...AssetFields
    }
    score
    productVariantId
    priceWithTax {
      ... on PriceRange {
        price: max
      }
      ... on SinglePrice {
        price: value
      }
    }

    productVariantName
    currencyCode
  }
`;