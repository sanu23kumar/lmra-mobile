import { View, StyleSheet } from "react-native";

export function ExpenseInputRow({ children }: { children: React.ReactNode }) {
  return <View style={styles.inputRow}>{children}</View>;
}

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: "row",
    alignContent: "stretch",
    gap: 12,
  },
});
