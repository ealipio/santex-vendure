import { useEffect, useState } from 'react';

import { useProducts, useAddItemToOrder } from '../hooks';
import { IProduct } from '../types/product';
import Product from './Product';

function ProductList() {
  const { loading, error, data } = useProducts();

  const [AddItemToOrder, { data: dataFromOrder }] = useAddItemToOrder();

  const [products, setProducts] = useState<IProduct[]>([]);

  //console.log(dataFromOrder);
  useEffect(() => {
    if (data?.products) {
      setProducts(data?.products?.items);
    }
  }, [data?.products]);

  if (loading) {
    return <div className="card">Loading</div>;
  }

  if (error) {
    return <p>Error :(</p>;
  }

  const productList = products.map((product: IProduct) => (
    <Product key={product.id} product={product} onBuy={AddItemToOrder} />
  ));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {productList.length ? productList : 'No Products'}
    </div>
  );
}

export default ProductList;
