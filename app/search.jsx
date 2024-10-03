import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AnimatedSearch from "../components/AnimatedSearch";
import "../global.css";

export default function search() {
  return (
    <SafeAreaView style={styles.container}>
      <View className="flex-1">
        <AnimatedSearch />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#60a5fa",
  },
});
