import { ThemedView } from "@/components/ThemedView";
import { useExpenses } from "@/database/tables/expenses/expenses.hooks";
import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import ThemedButton from "../ThemedButton";
import ThemedTextInput from "../ThemedTextInput";
import { formatDateTime } from "@/utils/formatDateTime";
import DatePicker from "react-native-date-picker";
import { usePaymentMethods } from "@/database/tables/paymentMethods/paymentMethods.hooks";
import { useExpenseCategories } from "@/database/tables/expenseCategories/expenseCategories.hooks";
import { useRouter } from "expo-router";

export default function AddExpense() {
  const { navigate } = useRouter();

  const { handleAddExpense } = useExpenses();
  const { selectedMethod } = usePaymentMethods();
  const { selectedCategory } = useExpenseCategories();

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const placeholderName =
    amount.length > 0 ? "Expense of " + " " + amount : "Name";

  const addExpense = async () => {
    const expenseName = name.trim().length > 0 ? name : placeholderName;
    await handleAddExpense(
      expenseName,
      Number(amount),
      new Date(),
      selectedMethod.id,
      selectedCategory.id
    );
    setName("");
    setAmount("");
  };

  return (
    <ThemedView style={styles.parent}>
      <View style={styles.inputRow}>
        <ThemedTextInput
          placeholder={placeholderName}
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={styles.inputRow}>
        <ThemedTextInput
          placeholder="Amount"
          value={amount}
          keyboardType="numeric"
          inputMode="numeric"
          onChangeText={setAmount}
        />
        <ThemedTextInput
          placeholder={formatDateTime(new Date())}
          onPress={() => setOpen(true)}
          value={formatDateTime(date)}
          editable={false}
        />
      </View>
      <View style={styles.inputRow}>
        <ThemedTextInput
          placeholder="Method"
          onPress={() => navigate("/payment_methods")}
          value={selectedMethod?.method_name}
          editable={false}
        />
        <ThemedTextInput
          placeholder="Category"
          onPress={() => navigate("/expense_categories")}
          value={selectedCategory?.category_name}
          editable={false}
        />
      </View>

      <Pressable onPress={addExpense}>
        <ThemedButton name="Add Expense" />
      </Pressable>

      <DatePicker
        modal
        open={open}
        date={date}
        mode="datetime" // Change to "date" if you only want to select a date
        onConfirm={(date) => {
          setOpen(false);
          setDate(date); // Set the selected date
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  parent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    borderTopWidth: 0.5,
    borderColor: "#eee",
  },
  inputRow: {
    flexDirection: "row",
    alignContent: "stretch",
    gap: 12,
  },
  dateButton: {
    borderRadius: 8,
    alignSelf: "stretch",
    flexGrow: 1,
    flex: 1,
  },
});
