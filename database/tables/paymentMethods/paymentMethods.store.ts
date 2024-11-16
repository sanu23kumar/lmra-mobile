import { create } from "zustand";
import { PaymentMethod } from "./paymentMethods.types";
import { InitialPaymentMethods } from "./paymentMethods.values";

interface PaymentMethodsStore {
  paymentMethods: PaymentMethod[];
  setPaymentMethods: (paymentMethods: PaymentMethod[]) => void;
  selectedMethod?: PaymentMethod;
  setSelectePaymentMethod: (paymentMethod: PaymentMethod) => void;
}

export const usePaymentMethodsStore = create<PaymentMethodsStore>((set) => ({
  paymentMethods: InitialPaymentMethods,
  setPaymentMethods: (paymentMethods) => set({ paymentMethods }),
  setSelectePaymentMethod: (selectedMethod) => set({ selectedMethod }),
}));
