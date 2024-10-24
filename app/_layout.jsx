import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "../Redux/store";

export default function Layout() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: "white",
            },
            headerTintColor: "black",
            headerTitleStyle: {
              color: "black",
            },
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="profile" options={{ headerTitle: "Profile" }} />
          <Stack.Screen name="aboutus" options={{ headerTitle: "AboutUs" }} />
          <Stack.Screen name="search" options={{ headerShown: false }} />
        </Stack>
      </GestureHandlerRootView>
    </Provider>
  );
}
