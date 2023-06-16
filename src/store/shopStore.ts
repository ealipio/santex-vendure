import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const INITIAL_VALUE = 0;

interface ShopStore {
  subTotal: number;
  setSubTotal: (subTotal: number) => void;
}

export const useShopStore = create<ShopStore>()(
  persist(
    (set) => ({
      subTotal: INITIAL_VALUE,
      setSubTotal: (subTotal: number) => set(() => ({ subTotal })),
    }),
    {
      name: 'shop-store',
    }
  )
);
