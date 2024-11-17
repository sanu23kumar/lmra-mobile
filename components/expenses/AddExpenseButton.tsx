import { Pressable } from "react-native";
import ThemedButton from "../ThemedButton";

export function AddExpenseButton({ onPress }: { onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={{ alignSelf: "stretch", flexGrow: 1 }}>
      <ThemedButton name="Add Expense" />
    </Pressable>
  );
}
