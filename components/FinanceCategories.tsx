import { StyleSheet, View } from "react-native";
import { ThemedText } from "./ThemedText";

export default function FinanceCategories({
  categories,
}: {
  categories: string[];
}) {
  return (
    <View>
      {categories?.map((category) => (
        <ThemedText type="sm" style={styles.text} key={category}>
          {category}
        </ThemedText>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {},
});
