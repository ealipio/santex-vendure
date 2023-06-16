import { FC, useState } from 'react';

import { ShoppingCart } from 'lucide-react';

import { cn } from '../utils/tailwind';

import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

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
      <Card className={cn('w-[600px]', 'm-2')} key={product.id}>
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>{product.description}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="bg-indigo-300">
            <img
              className="object-cover h-48 w-full"
              src={product.assets[0].preview}
              loading="lazy"
            />
          </div>
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">Variants:</p>
              <div className="text-sm text-muted-foreground">
                <VariantList
                  variantItems={product.variantList.items}
                  onSelectVariantProduct={handleBuyAction}
                />
              </div>
            </div>
          </div>
          <div></div>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            disabled={!selectedProductVariant}
            onClick={handleBuy}
          >
            <ShoppingCart className="mr-2 h-4 w-4" /> Buy this product
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default Product;
