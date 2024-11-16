import ScreenView from "@/components/ScreenView";
import ThemedButton from "@/components/ThemedButton";
import ThemedTextInput from "@/components/ThemedTextInput";
import SelectorItem from "@/components/expenses/SelectorItem";
import { usePaymentMethods } from "@/database/tables/paymentMethods/paymentMethods.hooks";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, View } from "react-native";

export default function PaymentMethods() {
  const { back } = useRouter();

  const {
    paymentMethods,
    handleAddPaymentMethod,
    handleDeletePaymentMethod,
    setSelectePaymentMethod,
  } = usePaymentMethods();
  const [methodName, setMethodName] = useState("");

  const onAddMethod = () => handleAddPaymentMethod(methodName);

  return (
    <ScreenView>
      <View style={{ flex: 1 }}>
        {paymentMethods.map((method) => {
          const onDeleteCategory = () => handleDeletePaymentMethod(method.id);
          const onSelecteCategory = () => {
            setSelectePaymentMethod(method);
            back();
          };
          return (
            <SelectorItem
              key={method.id}
              name={method.method_name}
              onPress={onSelecteCategory}
              onLongPress={onDeleteCategory}
            />
          );
        })}
      </View>

      <View
        style={{
          paddingHorizontal: 16,
          justifyContent: "space-between",
        }}
      >
        <View style={{ height: 50 }}>
          <ThemedTextInput
            placeholder="Method name"
            value={methodName}
            onChangeText={setMethodName}
          />
        </View>

        <Pressable
          onPress={onAddMethod}
          disabled={methodName.trim().length === 0}
        >
          <ThemedButton name="Add Category" />
        </Pressable>
      </View>
    </ScreenView>
  );
}
