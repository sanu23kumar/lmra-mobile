import { usePaymentMethods } from "@/database/tables/paymentMethods/paymentMethods.hooks";
import ThemedTextInput from "../ThemedTextInput";
import { useRouter } from "expo-router";

export function PaymentMethodSelector() {
  const { navigate } = useRouter();
  const { selectedMethod } = usePaymentMethods();

  return (
    <ThemedTextInput
      placeholder="Method"
      onPress={() => navigate("/payment_methods")}
      value={selectedMethod.method_name}
      editable={false}
    />
  );
}
