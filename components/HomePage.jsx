import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { setAddress } from "../Redux/addressSlice";
import { data } from "../Utils/Pro";
import Address from "./Address";
import HomeCategory from "./HomeCategory";
import LocationSelector from "./LocationSelector";

const HomePage = () => {
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
        <View style={styles.categoriesContainer}>
          {data.map((item) => (
            <HomeCategory key={item.categories.id} category={item.categories} />
          ))}
        </View>
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

export default HomePage;
