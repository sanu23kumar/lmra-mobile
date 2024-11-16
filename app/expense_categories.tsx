import ThemedButton from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import ThemedTextInput from "@/components/ThemedTextInput";
import { ThemedView } from "@/components/ThemedView";
import { useExpenseCategories } from "@/database/tables/expenseCategories/expenseCategories.hooks";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function PaymentMethods() {
  const { back } = useRouter();
  const { bottom } = useSafeAreaInsets();
  const borderColor = useThemeColor({}, "textLight");
  const {
    expenseCategories,
    setSelectedCategory,
    handleAddExpenseCategory,
    handleDeleteExpenseCategory,
  } = useExpenseCategories();
  const [expenseCategory, setExpenseCategory] = useState("");

  const onAddMethod = () => handleAddExpenseCategory(expenseCategory);

  return (
    <ThemedView style={{ flex: 1, paddingBottom: bottom }}>
      <View style={{ flex: 1 }}>
        {expenseCategories.map((category) => {
          const onDeleteCategory = () =>
            handleDeleteExpenseCategory(category.id);
          const onSelecteCategory = () => {
            setSelectedCategory(category);
            back();
          };
          return (
            <Pressable
              style={{
                paddingHorizontal: 16,
                paddingVertical: 12,
                borderRadius: 12,
                borderWidth: 0.5,
                marginHorizontal: 16,
                marginBottom: 16,
                borderColor,
              }}
              onPress={onSelecteCategory}
              onLongPress={onDeleteCategory}
            >
              <ThemedText type="defaultSemiBold" colorScheme="textLight">
                {category.category_name}
              </ThemedText>
            </Pressable>
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
    </ThemedView>
  );
}
