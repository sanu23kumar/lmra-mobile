import { Pressable, StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { Expense } from "@/database/tables/expenses/expenses.types";
import { useExpenses } from "@/database/tables/expenses/expenses.hooks";
import { formatCurrency } from "@/utils/formatCurrency";
import { formatDateTime } from "@/utils/formatDateTime";

export default function UserExpense({ item }: { item: Expense }) {
  const { handleDeleteExpense } = useExpenses();
  const deleteExpense = () => {
    handleDeleteExpense(item.id);
  };
  return (
    <Pressable onLongPress={deleteExpense} style={styles.button}>
      <View>
        <ThemedText type="sm" colorScheme="textLight">
          {formatDateTime(item.date_of_expense)}
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
