import ThemedTextInput from "../ThemedTextInput";
import { useRouter } from "expo-router";

export function PaymentMethodSelector({ methodName }: { methodName: string }) {
  const { navigate } = useRouter();

  return (
    <ThemedTextInput
      placeholder="Method"
      onPress={() => navigate("/payment_methods")}
      value={methodName}
      editable={false}
    />
  );
}
