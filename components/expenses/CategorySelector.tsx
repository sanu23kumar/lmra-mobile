import { useExpenseCategories } from "@/database/tables/expenseCategories/expenseCategories.hooks";
import ThemedTextInput from "../ThemedTextInput";
import { useRouter } from "expo-router";

export function CategorySelector() {
  const { navigate } = useRouter();
  const { selectedCategory } = useExpenseCategories();

  return (
    <ThemedTextInput
      placeholder="Category"
      onPress={() => navigate("/expense_categories")}
      value={selectedCategory.category_name}
      editable={false}
    />
  );
}
