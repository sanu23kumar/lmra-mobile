import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { Pressable } from "react-native";
import { ThemedIcon } from "./ThemedIcon";

export default function Header(props: any) {
  const top = 60;
  return (
    <ThemedView
      style={{
        padding: 16,
        paddingTop: top,
        flexDirection: "row",
        gap: 12,
        height: 120,
      }}
    >
      <ThemedText
        type={props.navigation.canGoBack() ? "subtitle" : "title"}
        colorScheme="primary"
        // TODO R
        style={{
          position: "absolute",
          top,
          left: 0,
          right: 0,
          textAlign: "center",
        }}
      >
        {props.options.title}
      </ThemedText>
      {props.navigation.canGoBack() ? (
        <Pressable onPress={props.navigation.goBack} style={{ zIndex: 4 }}>
          <ThemedIcon name="arrow-back" colorScheme="primary" />
        </Pressable>
      ) : null}
    </ThemedView>
  );
}
