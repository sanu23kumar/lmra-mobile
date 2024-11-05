import { Pressable, StyleSheet, View } from "react-native";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import FinanceCategories from "./FinanceCategories";
import { formatCurrency } from "@/utils/formatCurrency";

export default function FinanceSection({
  title,
  total,
  categories,
  onPress,
}: {
  title: string;
  total: string;
  categories: string[];
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress} key={title}>
      <ThemedView style={styles.section}>
        <ThemedText type="defaultSemiBold" colorScheme="primary">
          {title}
        </ThemedText>
        <View style={styles.details}>
          <FinanceCategories categories={categories} />
          <ThemedText type="xl">{formatCurrency(total)}</ThemedText>
        </View>
      </ThemedView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  section: {
    borderRadius: 8,
    padding: 16,
    borderColor: "lightgrey",
    borderWidth: 1,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 8,
  },
});