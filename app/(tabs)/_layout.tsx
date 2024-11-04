import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useThemeColor } from "@/hooks/useThemeColor";
import Header from "@/components/Header";

export default function TabLayout() {
  const backgroundColor = useThemeColor({}, "background");
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#CD853F",
        tabBarStyle: { backgroundColor },
        header: Header,
      }}
      backBehavior="none"
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            /* @tutinfo The <CODE>focused</CODE> param allows us to change a tab's icon and label behavior when it is active and inactive.*/
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="finances"
        options={{
          title: "Finances",
          tabBarIcon: ({ color, focused }) => (
            /* @tutinfo */
            <Ionicons
              name={focused ? "book" : "book-outline"}
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
            /* @tutinfo */
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
