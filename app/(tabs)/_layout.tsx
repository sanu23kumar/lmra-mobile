import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#CD853F",
        header: (props) => {
          const { top } = useSafeAreaInsets();
          return (
            <ThemedView>
              <ThemedText
                type="title"
                style={{
                  marginTop: top,
                  padding: 16,
                  fontFamily: "Poppins",
                  color: "#CD853F",
                }}
              >
                {props.options.title}
              </ThemedText>
            </ThemedView>
          );
        },
      }}
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
