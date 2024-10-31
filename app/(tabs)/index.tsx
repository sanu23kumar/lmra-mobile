import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Text, View, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.text}>Home screen</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {},
});
