import { create } from "zustand";
import { PaymentMethod } from "./paymentMethods.types";

interface PaymentMethodsStore {
  paymentMethods: PaymentMethod[];
  setPaymentMethods: (paymentMethods: PaymentMethod[]) => void;
}

export const usePaymentMethodsStore = create<PaymentMethodsStore>((set) => ({
  paymentMethods: [],
  setPaymentMethods: (paymentMethods) => set({ paymentMethods }),
}));
