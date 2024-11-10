import Header from "@/components/Header";
import { DatabaseProvider } from "@/database/database";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <DatabaseProvider>
      <Stack
        screenOptions={{
          header: Header,
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen
          name="expenses"
          options={{
            title: "Expenses",
          }}
        />
      </Stack>
    </DatabaseProvider>
  );
}
