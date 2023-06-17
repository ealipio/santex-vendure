import { useShopStore } from '../store/shopStore';

function Header() {
  const subTotal = useShopStore((state) => state.subTotal);

  return (
    <div className=" bg-neutral-800 text-white p-4 text-right inset-0 sticky z-10">
      Subtotal of the current order:
      <b className="text-lime-300 mx-1">{subTotal} USD</b>
    </div>
  );
}

export default Header;
