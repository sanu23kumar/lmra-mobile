import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

export default function Header(props: any) {
  const { top } = useSafeAreaInsets();
  return (
    <ThemedView style={{ padding: 16, paddingTop: top, flexDirection: "row" }}>
      {props.navigation.canGoBack() ? (
        <Pressable onPress={props.navigation.goBack}>
          <Ionicons name="arrow-back" size={24} color={"#CD853F"} />
        </Pressable>
      ) : null}
      <ThemedText
        type="title"
        style={{
          fontFamily: "Poppins",
          color: "#CD853F",
          paddingLeft: 12,
        }}
      >
        {props.options.title}
      </ThemedText>
    </ThemedView>
  );
}
