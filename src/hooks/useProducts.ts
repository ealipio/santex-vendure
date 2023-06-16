import { useQuery } from '@apollo/client';

import {
  GET_PRODUCTS,
  SEARCH_QUERY,
  GET_PRODUCTS_FROM_COLLECTIONS,
} from '../graphql/queries/products';

export const useProducts = () => useQuery(GET_PRODUCTS);

export const useProductsFromCollections = () =>
  useQuery(GET_PRODUCTS_FROM_COLLECTIONS);

export const useVariantProducts = (groupByProduct: boolean) =>
  useQuery(SEARCH_QUERY, { variables: { groupByProduct } });
