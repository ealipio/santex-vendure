import { useEffect, useState } from 'react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';

import { useProducts, useAddItemToOrder } from '../hooks';
import { useShopStore } from '../store/shopStore';
import { IProduct } from '../types/product';
import Product from './Product';

function ProductList() {
  const setSubTotal = useShopStore((state) => state.setSubTotal);

  const { loading, error, data } = useProducts();

  const [AddItemToOrder, { data: dataFromOrder }] = useAddItemToOrder();

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    if (dataFromOrder?.addItemToOrder) {
      // save to storage
      setSubTotal(dataFromOrder?.addItemToOrder?.subTotal);
    }
  }, [dataFromOrder?.addItemToOrder, setSubTotal]);

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

  if (products.length === 0) {
    return <h3> no products</h3>;
  }

  return (
    <Table className="">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Preview</TableHead>
          <TableHead className="hidden md:table-cell">Description</TableHead>
          <TableHead className="text-center">Variants</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product: IProduct) => (
          <Product key={product.id} product={product} onBuy={AddItemToOrder} />
        ))}
      </TableBody>
    </Table>
  );
}

export default ProductList;
