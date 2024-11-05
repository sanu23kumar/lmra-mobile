import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { ThemedView } from "./ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";

type ThemedTextInputProps = TextInputProps & {};

export default function ThemedTextInput({
  ...otherProps
}: ThemedTextInputProps) {
  const placeholderTextColor = useThemeColor({}, "placeholder");
  return (
    <ThemedView colorScheme="primaryLight" style={styles.inputWrapper}>
      <TextInput placeholderTextColor={placeholderTextColor} {...otherProps} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    marginVertical: 6,
    borderRadius: 8,
    padding: 12,
    alignSelf: "stretch",
    flexGrow: 1,
    flex: 1,
  },
});
