import { useState, useRef } from "react";
import { StyleSheet, View, TextInput, Pressable } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ExpenseInputRow } from "./ExpenseInputRow";
import { DateSelector } from "./DateSelector";
import { PaymentMethodSelector } from "./PaymentMethodSelector";
import { CategorySelector } from "./CategorySelector";
import { AddExpenseButton } from "./AddExpenseButton";
import ThemedTextInput from "../ThemedTextInput";
import Animated, { LinearTransition } from "react-native-reanimated";
import { useBottomSlideAnimation } from "./useBottomSlideAnimation";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import { useExpenses } from "@/database/tables/expenses/expenses.hooks";
import { useExpenseCategories } from "@/database/tables/expenseCategories/expenseCategories.hooks";
import { usePaymentMethods } from "@/database/tables/paymentMethods/paymentMethods.hooks";

export default function AddExpense() {
  const [formVisible, setFormVisible] = useState(false);
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const backgroundColor = useThemeColor({}, "background");
  const primaryBackground = useThemeColor({}, "primary");

  const { handleAddExpense } = useExpenses();
  const { selectedCategory } = useExpenseCategories();
  const { selectedMethod } = usePaymentMethods();
  const { animatedStyle, show, hide } = useBottomSlideAnimation(50);

  const showForm = () => {
    setFormVisible(true);
    show();
  };

  const hideForm = () => {
    hide();
    setFormVisible(false);
  };

  const placeholderName =
    amount.length > 0 ? "Expense of " + " " + amount : "Name";

  const addExpense = async () => {
    const expenseName = name.trim().length > 0 ? name : placeholderName;
    await handleAddExpense(
      expenseName,
      Number(amount),
      date,
      selectedMethod.id,
      selectedCategory.id
    );
    setName("");
    setAmount("");
  };

  return (
    <ThemedView style={styles.parent}>
      {formVisible && (
        <Animated.View
          layout={LinearTransition}
          style={[styles.formContainer, { backgroundColor }, animatedStyle]}
        >
          <ExpenseInputRow>
            <ThemedTextInput
              placeholder="Amount"
              autoFocus
              value={amount}
              keyboardType="numeric"
              inputMode="numeric"
              onChangeText={setAmount}
            />
            <DateSelector date={date} setDate={setDate} />
          </ExpenseInputRow>

          <ExpenseInputRow>
            <PaymentMethodSelector />
            <CategorySelector />
          </ExpenseInputRow>
          <ExpenseInputRow>
            <ThemedTextInput
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
          </ExpenseInputRow>
        </Animated.View>
      )}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Animated.View style={{ flex: 1 }} layout={LinearTransition}>
          <AddExpenseButton onPress={formVisible ? addExpense : showForm} />
        </Animated.View>
        <Animated.View layout={LinearTransition}>
          <Pressable
            onPress={formVisible ? hideForm : showForm}
            style={{
              padding: 12,
              backgroundColor: primaryBackground,
              position: "absolute",
              right: 0,
              bottom: -24,
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
            }}
          >
            <Ionicons
              name={formVisible ? "chevron-down" : "chevron-up"}
              size={24}
            />
          </Pressable>
        </Animated.View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  parent: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  formContainer: {
    position: "absolute",
    bottom: 64,
    left: 0,
    right: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  actions: {
    marginTop: 16,
  },
});
