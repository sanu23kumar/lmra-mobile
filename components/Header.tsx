import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { Pressable } from "react-native";
import { ThemedIcon } from "./ThemedIcon";

export default function Header(props: any) {
  const { top } = useSafeAreaInsets();
  return (
    <ThemedView
      style={{ padding: 16, paddingTop: top, flexDirection: "row", gap: 12 }}
    >
      {props.navigation.canGoBack() ? (
        <Pressable onPress={props.navigation.goBack}>
          <ThemedIcon name="arrow-back" colorScheme="primary" />
        </Pressable>
      ) : null}
      <ThemedText type="title" colorScheme="primary">
        {props.options.title}
      </ThemedText>
    </ThemedView>
  );
}
