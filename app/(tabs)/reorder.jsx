import { router } from "expo-router";
import React, { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LocationSelector from "../../components/LocationSelector";
import "../../global.css";

const reorder = () => {
  const bottomSheetRef = useRef();

  const [selectedAddress, setSelectedAddress] = useState("Select Location");

  function handleBottomBar() {
    bottomSheetRef.current?.expand();
  }

  function handleAddressSelect(title) {
    setSelectedAddress(title);
    bottomSheetRef.current?.close();
  }
  function handleProfile() {
    router.navigate("/profile");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View className="flex-1 bg-green-400"></View>
        <View className="flex-1 bg-blue-400"></View>
        <View className="flex-1 bg-blue-300"></View>
      </View>
      <LocationSelector
        ref={bottomSheetRef}
        onAddressselect={handleAddressSelect}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4ade80",
  },
  content: {
    flex: 1,
  },
});

export default reorder;
