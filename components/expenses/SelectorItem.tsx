import { useThemeColor } from "@/hooks/useThemeColor";
import { Pressable, PressableProps } from "react-native";
import { ThemedText } from "../ThemedText";

export default function SelectorItem({
  name,
  ...props
}: PressableProps & {
  name: string;
}) {
  const borderColor = useThemeColor({}, "textLight");

  return (
    <Pressable
      style={{
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 12,
        borderWidth: 0.5,
        marginHorizontal: 16,
        marginBottom: 16,
        borderColor,
      }}
      {...props}
    >
      <ThemedText type="defaultSemiBold" colorScheme="textLight">
        {name}
      </ThemedText>
    </Pressable>
  );
}
