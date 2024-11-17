import { useThemeColor } from "@/hooks/useThemeColor";
import { Pressable, PressableProps } from "react-native";
import { ThemedText } from "../ThemedText";

export default function SelectorItem({
  name,
  selected,
  ...props
}: PressableProps & {
  name: string;
  selected: boolean;
}) {
  const borderColor = useThemeColor({}, selected ? "primary" : "border");
  const backgroundColor = useThemeColor({}, "card");

  return (
    <Pressable
      style={{
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 12,
        borderWidth: 1,
        marginHorizontal: 16,
        marginBottom: 16,
        borderColor,
        backgroundColor,
      }}
      {...props}
    >
      <ThemedText
        type="defaultSemiBold"
        colorScheme={selected ? "primary" : "textLight"}
      >
        {name}
      </ThemedText>
    </Pressable>
  );
}
