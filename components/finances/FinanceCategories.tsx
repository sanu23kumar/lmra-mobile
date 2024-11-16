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
      {categories.map((category) => (
        <View style={styles.category}>
          <ThemedText
            type="sm"
            style={{ width: 60 }}
            key={category.category_id + category.category_name}
          >
            {category.category_name}
          </ThemedText>

          <ThemedText
            type="sm"
            key={category.category_id + category.category_name}
          >
            {category.total}
          </ThemedText>

          <ThemedText
            type="sm"
            colorScheme="textLight"
            key={category.category_id + category.category_name}
          >
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
