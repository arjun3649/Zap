import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import Address from "../../components/Address";
import LocationSelector from "../../components/LocationSelector";
import "../../global.css";
import { setAddress } from "../../Redux/addressSlice";

const reorder = () => {
  const bottomSheetRef = React.useRef(null);
  const selectedAddress = useSelector((state) => state.address.title);
  const dispatch = useDispatch();

  const handleBottomBar = () => {
    bottomSheetRef.current?.expand();
  };

  const handleAddressSelect = (title) => {
    dispatch(setAddress(title));
    bottomSheetRef.current?.close();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.addressContainer}>
          <Address
            handleBottomBar={handleBottomBar}
            address={selectedAddress}
          />
        </View>
        <View className="flex-1 bg-black"></View>
      </ScrollView>
      <LocationSelector
        ref={bottomSheetRef}
        onAddressSelect={handleAddressSelect}
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
    backgroundColor: "white",
  },
  addressContainer: {
    backgroundColor: "#4ade80",
    paddingVertical: 16,
  },
  categoriesContainer: {
    backgroundColor: "#e5e7eb",
    marginTop: 4,
  },
});

export default reorder;
