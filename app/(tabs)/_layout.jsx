import { Ionicons } from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <Tabs
        screenOptions={{
          headerTintColor: "black",
          headerShadowVisible: true,

          headerRight: () => (
            <Link href="../search" asChild>
              <TouchableOpacity>
                <Ionicons
                  name="search-outline"
                  size={24}
                  color="black"
                  style={{ marginRight: 15 }}
                />
              </TouchableOpacity>
            </Link>
          ),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="categorypage"
          options={{
            headerShown: true,
            title: "Category",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="list-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="reorder"
          options={{
            headerShown: true,
            title: "Reorder",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="repeat-outline" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
}
