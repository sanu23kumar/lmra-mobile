import AddExpense from "@/components/expenses/AddExpense";
import { ThemedView } from "@/components/ThemedView";
import UserExpense from "@/components/expenses/UserExpense";
import { Expense } from "@/database/tables/expenses/expenses.types";
import { useExpenses } from "@/database/tables/expenses/expenses.hooks";
import { FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useEffect, useRef } from "react";

export default function Expenses() {
  const { bottom } = useSafeAreaInsets();
  const { expenses } = useExpenses();
  const flatListRef = useRef<FlatList>(null); // Ref to the FlatList
  const previousLength = useRef(expenses.length);

  useEffect(() => {
    // Check if an item was added
    if (expenses.length > previousLength.current) {
      flatListRef.current?.scrollToEnd({ animated: true });
    }
    // Update the previous length for next comparison
    previousLength.current = expenses.length;
  }, [expenses]);

  const renderItem = ({ item }: { item: Expense }) => (
    <UserExpense item={item} />
  );

  return (
    <ThemedView style={{ flex: 1, paddingBottom: bottom }}>
      <FlatList
        data={expenses}
        keyExtractor={(expense) => expense.id + ""}
        renderItem={renderItem}
        contentContainerStyle={{ gap: 16 }}
      />
      <AddExpense />
    </ThemedView>
  );
}
