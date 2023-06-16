import { useEffect, useState } from 'react';

import { useProductsFromCollections, useAddItemToOrder } from '../hooks';
import { IProductFromCollections } from '../types/product';
import { parseDataFromCollections } from '../utils/helpers';
import Product from './Product';

function ProductList() {
  const { loading, error, data } = useProductsFromCollections();

  const [AddItemToOrder, { data: dataFromOrder }] = useAddItemToOrder();

  const [products, setProducts] = useState<IProductFromCollections[]>([]);

  console.log(dataFromOrder);
  useEffect(() => {
    if (data?.collections) {
      /**
       * I'm parsing the data since using the search method
       * from API is returning an empty array so I'm parsing the
       * data and removing the repeated items.
       */
      const parsedProduct = parseDataFromCollections(data?.collections);
      setProducts(parsedProduct);
    }
  }, [data?.collections]);

  if (loading) {
    return <div className="card">Loading</div>;
  }

  if (error) {
    return <p>Error :(</p>;
  }

  const productList = products.map((product: IProductFromCollections) => (
    <Product key={product.id} product={product} onBuy={AddItemToOrder} />
  ));

  return <>{productList.length ? productList : 'No Products'}</>;
}

export default ProductList;
