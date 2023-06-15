import { useEffect, useState } from 'react';
import { useVariantProducts } from './hooks/useProducts';
import { useAddItemToOrder } from './hooks/useOrder';

interface IAsset {
  id: string;
  preview: string;
}
interface IProduct {
  productVariantId: string;
  productVariantName: string;
  score: number;
  sku: string;
  description: string;
  currencyCode: string;
  productAsset: IAsset;
  priceWithTax: { price: number };
}

function App() {
  const { loading, error, data } = useVariantProducts(true);
  const [AddItemToOrder, { data: data2, loading: loading2, error: error2 }] =
    useAddItemToOrder();

  console.log({ data2, error2, loading2 });
  const [products, setProducts] = useState<IProduct[]>([]);
  //const { loading, error, data } = useProducts();

  useEffect(() => {
    if (data?.search) {
      setProducts(data.search.items);
    }
  }, [data?.search]);

  if (loading) {
    return <div className="card">Loading</div>;
  }

  if (error) {
    return <p>Error :(</p>;
  }

  const handleBuyAction = (product: IProduct) => () => {
    const variables = {
      productVariantId: product.productVariantId,
      quantity: 5,
    };
    // @todo: include a input text to set the quantity
    AddItemToOrder({ variables });
  };

  const productList = products.map((product: IProduct) => {
    return (
      <div key={product.productVariantId}>
        <b>{product.productVariantName}</b>
        <p>Description: {product.description}</p>
        <em>
          Price:{product.priceWithTax.price} {product.currencyCode}
        </em>
        <p>SKU: {product.sku}</p>
        <img src={product.productAsset.preview} width={100} loading="lazy" />
        <input
          type="number"
          name="quantity"
          defaultValue={1}
          step={1}
          className="border-4 border-sky-500"
        />
        <button
          onClick={handleBuyAction(product)}
          className="bg-slate-600 text-white m-2 p-4 text-lg cursor-pointer hover:bg-slate-800"
        >
          Buy
        </button>
      </div>
    );
  });

  return (
    <>
      <h1 className="text-3xl font-bold underline text-blue-400">
        Hello world!
      </h1>
      {productList}
    </>
  );
}

export default App;
