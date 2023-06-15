import { useQuery } from '@apollo/client';

import { GET_PRODUCTS, SEARCH_QUERY } from '../graphql/queries/products';

export const useProducts = () => useQuery(GET_PRODUCTS);

export const useVariantProducts = (groupByProduct: boolean) =>
  useQuery(SEARCH_QUERY, { variables: { groupByProduct } });
