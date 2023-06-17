import { FC, useState } from 'react';

import { ShoppingCart } from 'lucide-react';

import { Button } from './ui/button';

import { TableCell, TableRow } from '../components/ui/table';

import { IProduct } from '../types/product';
import { MutationFunctionOptions } from '@apollo/client';
import VariantList from './VariantList';

interface IProductProps {
  product: IProduct;
  onBuy: (options: MutationFunctionOptions) => void;
}

const Product: FC<IProductProps> = ({ product, onBuy }) => {
  const [selectedProductVariant, setSelectedProductVariant] =
    useState<string>('');

  const handleBuy = () => {
    const variables = {
      productVariantId: selectedProductVariant,
      quantity: 1,
    };
    onBuy({ variables });
  };

  const handleBuyAction = (productVariantId: string) =>
    setSelectedProductVariant(productVariantId);

  return (
    <>
      <TableRow key={product.id}>
        <TableCell className="font-medium">{product.name}</TableCell>
        <TableCell className="hidden md:table-cell">
          <img
            className="object-contain h-40 w-full"
            src={product.assets[0].preview}
            loading="lazy"
          />
        </TableCell>
        <TableCell className="hidden md:table-cell">
          {product.description}
        </TableCell>

        <TableCell>
          <VariantList
            variantItems={product.variantList.items}
            onSelectVariantProduct={handleBuyAction}
          />
        </TableCell>

        <TableCell>
          <Button
            className="w-full whitespace-nowrap"
            disabled={!selectedProductVariant}
            onClick={handleBuy}
          >
            <ShoppingCart className="mr-2 h-4 w-4" /> Buy
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default Product;
