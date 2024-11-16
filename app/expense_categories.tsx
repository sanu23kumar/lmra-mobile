import ScreenView from "@/components/ScreenView";
import ThemedButton from "@/components/ThemedButton";
import ThemedTextInput from "@/components/ThemedTextInput";
import SelectorItem from "@/components/expenses/SelectorItem";
import { useExpenseCategories } from "@/database/tables/expenseCategories/expenseCategories.hooks";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, View } from "react-native";

export default function PaymentMethods() {
  const { back } = useRouter();
  const {
    expenseCategories,
    setSelectedCategory,
    handleAddExpenseCategory,
    handleDeleteExpenseCategory,
  } = useExpenseCategories();
  const [expenseCategory, setExpenseCategory] = useState("");

  const onAddMethod = () => handleAddExpenseCategory(expenseCategory);

  return (
    <ScreenView>
      <View style={{ flex: 1 }}>
        {expenseCategories.map((category) => {
          const onDeleteCategory = () =>
            handleDeleteExpenseCategory(category.id);
          const onSelecteCategory = () => {
            setSelectedCategory(category);
            back();
          };
          return (
            <SelectorItem
              key={category.id}
              name={category.category_name}
              onPress={onSelecteCategory}
              onLongPress={onDeleteCategory}
            />
          );
        })}
      </View>

      <View
        style={{
          paddingHorizontal: 16,
          justifyContent: "space-between",
        }}
      >
        <View style={{ height: 50 }}>
          <ThemedTextInput
            placeholder="Method name"
            value={expenseCategory}
            onChangeText={setExpenseCategory}
          />
        </View>

        <Pressable
          onPress={onAddMethod}
          disabled={expenseCategory.trim().length === 0}
        >
          <ThemedButton name="Add Category" />
        </Pressable>
      </View>
    </ScreenView>
  );
}
