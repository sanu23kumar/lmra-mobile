import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useThemeColor } from "@/hooks/useThemeColor";
import Header from "@/components/Header";

export default function TabLayout() {
  const backgroundColor = useThemeColor({}, "background");
  const tabBarActiveTintColor = useThemeColor({}, "primary");

  return (
    <Tabs
      initialRouteName="finances"
      screenOptions={{
        tabBarActiveTintColor,
        tabBarStyle: { backgroundColor },
        header: Header,
      }}
      backBehavior="none"
    >
      <Tabs.Screen
        name="finances"
        options={{
          title: "Finances",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "book" : "book-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: "Options",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "menu" : "menu-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
