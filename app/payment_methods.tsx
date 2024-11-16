import ThemedButton from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import ThemedTextInput from "@/components/ThemedTextInput";
import { ThemedView } from "@/components/ThemedView";
import { usePaymentMethods } from "@/database/tables/paymentMethods/paymentMethods.hooks";
import { useState } from "react";
import { Pressable } from "react-native";

export default function PaymentMethods() {
  const { paymentMethods, handleAddPaymentMethod } = usePaymentMethods();
  const [methodName, setMethodName] = useState("");

  const onAddMethod = () => handleAddPaymentMethod(methodName);

  return (
    <ThemedView style={{ flex: 1 }}>
      {paymentMethods.map((method) => (
        <ThemedText>{method.method_name}</ThemedText>
      ))}
      <ThemedTextInput
        placeholder="Method name"
        value={methodName}
        onChangeText={setMethodName}
      />
      <Pressable
        onPress={onAddMethod}
        disabled={methodName.trim().length === 0}
      >
        <ThemedButton name="Add" />
      </Pressable>
    </ThemedView>
  );
}
