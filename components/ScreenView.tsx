import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedView } from "./ThemedView";
import { ViewProps } from "react-native";

export default function ScreenView({ ...otherProps }: ViewProps) {
  const { bottom } = useSafeAreaInsets();

  return (
    <ThemedView style={{ flex: 1, paddingBottom: bottom }} {...otherProps} />
  );
}
