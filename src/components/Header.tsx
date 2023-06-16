import { useShopStore } from '../store/shopStore';

function Header() {
  const subTotal = useShopStore((state) => state.subTotal);

  return (
    <div className="w-full bg-black text-white rounded-md p-4 h-full relative text-right">
      Subtotal of the current order:
      <b className="text-lime-300 mx-1">{subTotal} USD</b>
    </div>
  );
}

export default Header;
