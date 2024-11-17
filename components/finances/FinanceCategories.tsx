import { StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { ExpenseCategoryTotals } from "@/database/tables/expenseCategories/expenseCategories.types";

export default function FinanceCategories({
  categories,
  total,
}: {
  categories: ExpenseCategoryTotals[];
  total: number;
}) {
  return (
    <View>
      {categories.map((category, index) => (
        <View style={styles.category} key={index}>
          <ThemedText type="sm" style={{ width: 60 }}>
            {category.category_name}
          </ThemedText>
          <ThemedText type="sm">{category.total}</ThemedText>
          <ThemedText type="sm" colorScheme="textLight">
            {Number((category.total / total) * 100).toFixed(0)}%
          </ThemedText>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  text: {},
});
