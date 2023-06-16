import { FC } from 'react';
import { IProductFromCollections } from '../types/product';
import { MutationFunctionOptions } from '@apollo/client';

interface IProductProps {
  product: IProductFromCollections;
  onBuy: (options: MutationFunctionOptions) => void;
}

const Product: FC<IProductProps> = ({ product, onBuy }) => {
  const handleBuyAction = (productVariantId: string) => () => {
    const variables = {
      productVariantId,
      quantity: 1,
    };
    onBuy({ variables });
  };

  return (
    <>
      <div key={product.id}>
        <b>{product.name}</b>
        <p>Description: {product.product.description}</p>
        <p className="bg-slate-800 text-green-400">
          stock: {product.stockLevel}
        </p>
        <em>
          Price:{product.priceWithTax} {product.currencyCode}
        </em>
        <p>SKU: {product.sku}</p>
        <img
          src={product.product.assets[0].preview}
          width={200}
          loading="lazy"
        />

        <button
          onClick={handleBuyAction(product.id)}
          className="bg-slate-600 text-white m-2 p-4 text-lg cursor-pointer hover:bg-slate-800"
        >
          Buy 1
        </button>
      </div>
    </>
  );
};

export default Product;
