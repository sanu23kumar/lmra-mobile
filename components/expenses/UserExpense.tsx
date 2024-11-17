import { Pressable, StyleSheet, View, ViewStyle } from "react-native";
import { ThemedText } from "../ThemedText";
import { Expense } from "@/database/tables/expenses/expenses.types";
import { useExpenses } from "@/database/tables/expenses/expenses.hooks";
import { formatCurrency } from "@/utils/formatCurrency";
import { formatDateTime } from "@/utils/formatDateTime";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useExpenseCategories } from "@/database/tables/expenseCategories/expenseCategories.hooks";

export default function UserExpense({ item }: { item: Expense }) {
  const { handleDeleteExpense } = useExpenses();
  const { expenseCategories } = useExpenseCategories();
  const itemExpenseCategoryName = expenseCategories.find(
    (c) => c.id === item.expense_category_id
  )?.category_name;
  const deleteExpense = () => {
    handleDeleteExpense(item.id);
  };
  const borderColor = useThemeColor({}, "border");
  const backgroundColor = useThemeColor({}, "card");
  const themedButton: ViewStyle = { borderColor, backgroundColor };
  return (
    <Pressable
      onLongPress={deleteExpense}
      style={[styles.button, themedButton]}
    >
      <View>
        <View style={{ flexDirection: "row" }}>
          <ThemedText type="sm" colorScheme="textLight">
            {formatDateTime(item.date_of_expense)}
          </ThemedText>
        </View>
        <ThemedText>{item.name}</ThemedText>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <ThemedText type="sm" colorScheme="primary">
          {itemExpenseCategoryName}
        </ThemedText>
        <ThemedText type="subtitle" colorScheme="primary">
          {formatCurrency(item.amount)}
        </ThemedText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    marginHorizontal: 16,
    borderRadius: 8,
    borderColor: "#eee",
  },
});
