import { Pressable, StyleSheet, View, ViewStyle } from "react-native";
import { ThemedText } from "../ThemedText";
import { Expense } from "@/database/tables/expenses/expenses.types";
import { useExpenses } from "@/database/tables/expenses/expenses.hooks";
import { formatCurrency } from "@/utils/formatCurrency";
import { formatDateTime } from "@/utils/formatDateTime";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function UserExpense({ item }: { item: Expense }) {
  const { handleDeleteExpense } = useExpenses();
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
        <ThemedText type="sm" colorScheme="textLight">
          {formatDateTime(item.date_of_expense)} {item.expense_category_id}
        </ThemedText>
        <ThemedText>{item.name}</ThemedText>
      </View>
      <ThemedText type="subtitle" colorScheme="primary">
        {formatCurrency(item.amount)}
      </ThemedText>
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
