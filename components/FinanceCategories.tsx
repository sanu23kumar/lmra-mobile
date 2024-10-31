import { StyleSheet, View } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";

export default function FinanceCategories({
  categories,
}: {
  categories: string[];
}) {
  return (
    <View>
      {categories?.map((category) => (
        <ThemedText type="sm" style={styles.text}>
          {category}
        </ThemedText>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {},
});
