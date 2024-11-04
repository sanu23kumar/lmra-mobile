import { ThemedView } from "@/components/ThemedView";
import { useExpenses } from "@/database/tables/expenses/useExpenses";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedText } from "./ThemedText";

function InputWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemedView
      lightColor="#CD853F22"
      darkColor="#CD853F22"
      style={{
        marginVertical: 6,
        borderRadius: 8,
        padding: 12,
        alignSelf: "stretch",
        flexGrow: 1,
        flex: 1,
      }}
    >
      {children}
    </ThemedView>
  );
}

export default function AddExpense() {
  const { handleAddExpense } = useExpenses();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [method, setMethod] = useState("");

  const placeholderName =
    amount.length > 0 ? "Expense of " + " " + amount : "Name";

  const addExpense = async () => {
    const expenseName = name.trim().length > 0 ? name : placeholderName;
    await handleAddExpense(expenseName, Number(amount), new Date());
    setName("");
    setAmount("");
  };

  return (
    <ThemedView
      style={{
        paddingHorizontal: 16,
        paddingTop: 16,
        borderTopWidth: 0.5,
        borderColor: "#eee",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignContent: "stretch",
          gap: 12,
        }}
      >
        <InputWrapper>
          <TextInput
            placeholder={placeholderName}
            placeholderTextColor={"#00000088"}
            value={name}
            onChangeText={setName}
          />
        </InputWrapper>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignContent: "stretch",
          gap: 12,
        }}
      >
        <InputWrapper>
          <TextInput
            placeholder="Amount"
            placeholderTextColor={"#00000088"}
            value={amount}
            keyboardType="numeric"
            inputMode="numeric"
            onChangeText={setAmount}
            style={{ flex: 1 }}
          />
        </InputWrapper>
        <InputWrapper>
          <TextInput
            placeholder={new Date().toLocaleString()}
            placeholderTextColor={"#00000088"}
            value={date}
            onChangeText={setDate}
          />
        </InputWrapper>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignContent: "stretch",
          gap: 12,
        }}
      >
        <InputWrapper>
          <TextInput
            placeholder="Method"
            placeholderTextColor={"#00000088"}
            value={method}
            onChangeText={setMethod}
          />
        </InputWrapper>
        <InputWrapper>
          <TextInput
            placeholder="Category"
            placeholderTextColor={"#00000088"}
            value={category}
            onChangeText={setCategory}
          />
        </InputWrapper>
      </View>

      <Pressable onPress={addExpense}>
        <ThemedView
          lightColor="#CD853F"
          darkColor="#CD853F"
          style={{
            marginVertical: 6,
            borderRadius: 8,
            padding: 12,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ThemedText
            lightColor="white"
            darkColor="white"
            type="defaultSemiBold"
          >
            Add Expense
          </ThemedText>
        </ThemedView>
      </Pressable>
    </ThemedView>
  );
}
