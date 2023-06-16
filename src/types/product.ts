export interface IAsset {
  id: string;
  preview: string;
}

export interface IProductFromVariant {
  productVariantId: string;
  productVariantName: string;
  score: number;
  sku: string;
  description: string;
  currencyCode: string;
  productAsset: IAsset;
  priceWithTax: { price: number };
}

export interface IProductFromCollections {
  id: string; // productVariantId
  productId: string;
  name: string;
  product: { description: string; assets: IAsset[] };
  sku: string;
  currencyCode: string;
  stockLevel: 'IN_STOCK' | 'OUT_OF_STOCK';
  priceWithTax: number;
}

export interface ItemFromCollections {
  productVariants: { items: IProductFromCollections[] };
}
export interface ICollection {
  items: ItemFromCollections[];
}
