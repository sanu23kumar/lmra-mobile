import { ThemedView } from "@/components/ThemedView";
import { Text, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <ThemedView style={styles.container}>
      <Text style={styles.text}>About screen</Text>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#CD853F",
  },
});
