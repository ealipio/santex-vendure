import {
  ICollection,
  IProductFromCollections,
  ItemFromCollections,
} from '../types/product';

function removeRepeatedBySKU(flatData: IProductFromCollections[]) {
  return flatData.reduce(
    (acc: IProductFromCollections[], obj: IProductFromCollections) => {
      if (!acc.some((item: IProductFromCollections) => item.sku === obj.sku)) {
        acc.push(obj);
      }
      return acc;
    },
    []
  );
}

export const parseDataFromCollections = (collection: ICollection) => {
  const parsedCollection = collection.items
    .map((item: ItemFromCollections) => {
      return item.productVariants.items;
    })
    .flat();

  return removeRepeatedBySKU(parsedCollection);
};
