import AddExpense from "@/components/expenses/AddExpense";
import { ThemedView } from "@/components/ThemedView";
import UserExpense from "@/components/expenses/UserExpense";
import { Expense } from "@/database/tables/expenses/expenses.types";
import { useExpenses } from "@/database/tables/expenses/expenses.hooks";
import { FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Expenses() {
  const { bottom } = useSafeAreaInsets();
  const { expenses } = useExpenses();

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
