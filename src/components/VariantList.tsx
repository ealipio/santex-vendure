import { FC } from 'react';
import { Label } from '../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';

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

  const variantList = variantItems.map((item) => {
    return (
      <div key={item.id} className="flex items-center space-x-2">
        <RadioGroupItem value={item.id} id={item.id} />
        <Label htmlFor={item.id}>
          {item.name}:{' '}
          <span className="bg-green-600 text-white rounded-md px-2 text-xs">
            {item.priceWithTax} {item.currencyCode}
          </span>
        </Label>
      </div>
    );
  });

  return (
    <>
      <RadioGroup onValueChange={onSelectVariantItem}>{variantList}</RadioGroup>
    </>
  );
};

export default VariantList;
