import { StyleSheet, ViewProps } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";

type ThemedButtonProps = ViewProps & {
  colorScheme?: keyof typeof Colors.light;
  name: string;
};

export default function ThemedButton({
  style,
  name,
  colorScheme = "primary",
  ...otherProps
}: ThemedButtonProps) {
  const backgroundColor = useThemeColor({}, colorScheme);
  return (
    <ThemedView
      lightColor={backgroundColor}
      darkColor={backgroundColor}
      style={[styles.button, style]}
      {...otherProps}
    >
      <ThemedText type="defaultSemiBold" colorScheme="background">
        {name}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 6,
    borderRadius: 8,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});
