import { View, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { Colors } from "@/constants/Colors";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  colorScheme?: keyof typeof Colors.light;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  colorScheme = "background",
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    colorScheme
  );

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
