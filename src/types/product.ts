export interface IAsset {
  id: string;
  preview: string;
}

export interface IVariantProduct {
  id: string;
  name: string;
  currencyCode: string;
  priceWithTax: number;
}

export interface IVariantList {
  totalItems: number;
  items: IVariantProduct[];
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  assets: IAsset[];
  variantList: IVariantList;
}
