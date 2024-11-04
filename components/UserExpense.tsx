import { Pressable, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { Expense } from "@/database/tables/expenses/expenses.types";
import { useExpenses } from "@/database/tables/expenses/useExpenses";

export default function UserExpense({ item }: { item: Expense }) {
  const { handleDeleteExpense } = useExpenses();
  const deleteExpense = () => {
    handleDeleteExpense(item.id);
  };
  return (
    <Pressable
      onLongPress={deleteExpense}
      style={{
        padding: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        marginHorizontal: 16,
        borderRadius: 8,
        borderColor: "#eee",
      }}
    >
      <View>
        <ThemedText type="sm" lightColor="#666">
          {new Date(item.date_of_expense).toLocaleString()}
        </ThemedText>
        <ThemedText>{item.name}</ThemedText>
      </View>
      <ThemedText type="subtitle" lightColor="#CD853F" darkColor="#CD853F">
        ₹{item.amount}
      </ThemedText>
    </Pressable>
  );
}
