import { PaymentMethod } from "./paymentMethods.types";

export const InitialPaymentMethods: PaymentMethod[] = [
  {
    created_at: new Date().toISOString(),
    id: 1,
    method_name: "Cash",
    updated_at: new Date().toISOString(),
  },
];
