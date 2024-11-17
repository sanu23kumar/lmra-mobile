import ThemedTextInput from "../ThemedTextInput";
import { useRouter } from "expo-router";

export function CategorySelector({ categoryName }: { categoryName: string }) {
  const { navigate } = useRouter();

  return (
    <ThemedTextInput
      placeholder="Category"
      onPress={() => navigate("/expense_categories")}
      value={categoryName}
      editable={false}
    />
  );
}
