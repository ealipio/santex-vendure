import { useMutation } from '@apollo/client';

import { ADD_ITEM_TO_ORDER } from '../graphql/mutations/order';

export const useAddItemToOrder = () => useMutation(ADD_ITEM_TO_ORDER);
