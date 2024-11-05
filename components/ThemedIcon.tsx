import { View, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import glyphmap from "@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Ionicons.json";

export type glyphmapType = keyof typeof glyphmap;

export type ThemedIconProps = ViewProps & {
  colorScheme?: keyof typeof Colors.light;
  size?: 24;
  name: keyof typeof glyphmap;
};

export function ThemedIcon({
  style,
  colorScheme = "text",
  size = 24,
  name,
  ...otherProps
}: ThemedIconProps) {
  const iconColor = useThemeColor({}, colorScheme);

  return (
    <Ionicons
      name={name}
      color={iconColor}
      size={size}
      style={style}
      {...otherProps}
    />
  );
}
