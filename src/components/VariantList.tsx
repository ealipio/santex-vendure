import { FC } from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select';

import { IVariantProduct } from '../types/product';

interface IVariantListProps {
  variantItems: IVariantProduct[];
  onSelectVariantProduct: (productVariantId: string) => void;
}

const VariantList: FC<IVariantListProps> = ({
  variantItems,
  onSelectVariantProduct,
}) => {
  const onSelectVariantItem = (productVariantId: string) => {
    onSelectVariantProduct(productVariantId);
  };

  return (
    <>
      <Select onValueChange={onSelectVariantItem}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a product" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Variant</SelectLabel>
            {variantItems.map((item) => {
              return (
                <SelectItem key={item.id} value={item.id}>
                  {item.name}
                  <span className="bg-green-600 text-white rounded-md px-1 mx-1 text-xs whitespace-nowrap">
                    {item.priceWithTax} {item.currencyCode}
                  </span>
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default VariantList;
